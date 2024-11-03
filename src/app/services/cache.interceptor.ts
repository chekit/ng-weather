import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CurrentConditions, Forecast } from 'app/shared/models';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BROWSER_STORAGE } from './browser-stotage.token';

type responseType = CurrentConditions | Forecast;

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, responseType>();

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {
    this.initLocalCache();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isCacheable(req)) return next.handle(req);

    const cachedResponse = this.cache.get(req.url);

    return cachedResponse ? of(new HttpResponse({ body: cachedResponse })) : this.sendRequest(req, next);
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

  private updateCache(key: string, data: responseType) {
    this.cache.set(key, data);
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
