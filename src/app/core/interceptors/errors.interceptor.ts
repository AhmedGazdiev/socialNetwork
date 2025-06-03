import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiAlertService } from '@taiga-ui/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorsInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const alert = inject(TuiAlertService);
  const destroyRef = inject(DestroyRef);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = '';

      if (error.error instanceof ErrorEvent) {
        message = `Client error: ${error.error.message}`;
      } else {
        message = `Server error: ${error.status} - ${error.message}`;
        if (error.error?.message) {
          message = error.error.message;
        }
      }

      alert
        .open(message, {
          label: 'Error',
          appearance: 'negative',
          autoClose: 3000,
        })
        .pipe(takeUntilDestroyed(destroyRef))
        .subscribe();

      return throwError(() => new Error(message));
    })
  );
};
