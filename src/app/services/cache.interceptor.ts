import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BROWSER_STORAGE } from './browser-stotage.token';

const REFRESH_TIMEOUT = 10000;

@Injectable()
export class CacheInterceptor<T> implements HttpInterceptor {
  private cache = new Map<string, { resp: T; cached: number }>();

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {
    this.initLocalCache();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isCacheable(req)) return next.handle(req);

    const cachedResponse = this.cache.get(req.url);

    if (cachedResponse) {
      const isReadyToUpdate = Date.now() - cachedResponse.cached > REFRESH_TIMEOUT;

      return isReadyToUpdate ? this.sendRequest(req, next) : of(new HttpResponse({ body: cachedResponse.resp }));
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
    this.cache.set(key, { resp: data, cached: Date.now() });
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
}
