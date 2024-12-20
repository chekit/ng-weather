import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BROWSER_STORAGE } from './browser-stotage.token';
import { WINDOW } from './window.token';

// Data gets cached for 2 hours
const DEFAULT_REFRESH_TIMEOUT = 2 * 60 * 60 * 1000;

@Injectable()
export class CacheInterceptor<T = any> implements HttpInterceptor {
  private cache = new Map<string, { resp: T; cachedAt: number }>();

  private storage = inject(BROWSER_STORAGE);
  private global = inject(WINDOW);

  constructor() {
    this.initLocalCache();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isCacheable(req)) return next.handle(req);

    const cachedResponse = this.cache.get(req.url);

    if (cachedResponse) {
      return this.isReadyToUpdate(cachedResponse.cachedAt)
        ? this.sendRequest(req, next)
        : of(new HttpResponse({ body: cachedResponse.resp }));
    }

    return this.sendRequest(req, next);
  }

  private sendRequest(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.updateCache(req.url, event.body);
        }
      })
    );
  }

  private updateCache(key: string, data: T) {
    this.cache.set(key, { resp: data, cachedAt: Date.now() });
    this.storage.setItem('cache', JSON.stringify(Array.from(this.cache)));
  }

  private isCacheable(req: HttpRequest<any>): boolean {
    return req.method === 'GET';
  }

  private initLocalCache(): void {
    const cached = this.storage.getItem('cache');

    if (cached) {
      this.cache = new Map(JSON.parse(cached));
    }
  }

  private isReadyToUpdate(cachedAt: number): boolean {
    if (!cachedAt) return true;

    const timeout = this.global.ref_timeout ?? DEFAULT_REFRESH_TIMEOUT;

    return Date.now() - cachedAt > timeout;
  }
}
