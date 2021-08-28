import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, share } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
    // if (req.method !== 'GET') {
    //   return next.handle(req);
    // }
    // if (req.headers.get('reset')) {
    //   this.cache.delete(req);
    // }

    // const cachedResponse: HttpResponse<any> | undefined = this.cache.get(req);
    // console.log('CACHE RESPONSE', cachedResponse);
    // if (cachedResponse) {
    //   console.log('got CACHE');
    //   return of(cachedResponse.clone());
    // } else {
    //   console.log('Will be Set CACHE');
    //   return next.handle(req).pipe(
    //     tap((stateEvent) => {
    //       if (stateEvent instanceof HttpResponse) {
    //         this.cache.set(req, stateEvent.clone());
    //         console.log(this.cache);
    //       }
    //     }),
    //     share()
    //   );
    // }
  }
}
