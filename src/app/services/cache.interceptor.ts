import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();

  constructor(@Inject('Window') private global: Window) {
    const cached = JSON.parse(global.localStorage.getItem('cache'));

    if (cached) {
      this.cache = new Map(cached);
    }
  }

  updateCache(key: string, data: HttpResponse<any>) {
    this.cache.set(key, data);
    this.global.localStorage.setItem('cache', JSON.stringify(Array.from(this.cache)));
  }

  readCache(key: string): any | undefined {
    return this.cache.get(key);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isCacheable(req)) return next.handle(req);

    const cachedResponse = this.cache.get(req.url);

    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next);
  }

  private sendRequest(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.updateCache(req.url, event);
        }
      })
    );
  }

  private isCacheable(req: HttpRequest<any>): boolean {
    return req.method === 'GET';
  }
}
