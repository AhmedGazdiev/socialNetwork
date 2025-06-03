import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEventPlugins } from '@taiga-ui/event-plugins';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_URL } from '@core/api.token';
import { authInterceptor } from '@core/interceptors/auth.interceptor';
import { errorsInterceptor } from '@core/interceptors/errors.interceptor';
import { logInterceptor } from '@core/interceptors/log.interceptor';
import { environment } from '@environments/environment.dev';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEventPlugins(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor, errorsInterceptor, logInterceptor])
    ),
    isDevMode()
      ? provideStoreDevtools({
          maxAge: 25,
          logOnly: !isDevMode(),
          autoPause: true,
          trace: false,
          traceLimit: 75,
        })
      : [],
    { provide: API_URL, useValue: environment.API_URL },
  ],
};
