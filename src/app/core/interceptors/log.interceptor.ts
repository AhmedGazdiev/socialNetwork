import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const logInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log(`Request to url: ${req.url}`);

  return next(req).pipe(
    tap({
      next: (event) => {
        console.log(`Response from the url: ${req.url}`, event);
      },
      error: (error) => {
        console.log(`Error: ${req.url}`, error);
      },
    })
  );
};
