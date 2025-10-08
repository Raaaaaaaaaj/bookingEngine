import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection, isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
// import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import { definePreset } from '@primeng/themes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
const MyCustomTheme = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{surface.50}',
      100: '{surface.100}',
      200: '{surface.200}',
      300: '{surface.300}',
      400: '{surface.400}',
      500: '#000000', /* Black primary color */
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000',
      950: '#000000'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CoreModule, SharedModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      // theme: {
      //   preset: Aura,
      // },
      theme: {
        preset: MyCustomTheme,
        options: {
          darkModeSelector: false // ensure light
        }
      },
    }),
    MessageService,
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
