import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './states/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './states/tasks/task.effect';
import { UserEffects } from './states/users/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    // add store : 
    importProvidersFrom(
      StoreModule.forRoot( appReducer ),
      //EffectsModule.forRoot([TaskEffects, UserEffects])
    )
  ]
};
