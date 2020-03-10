import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import * as LoginPageActions from './login.component.actions';
import * as AuthApiActions from './auth-api.actions';

import { Credentials } from '../../shared/models/credentials';
import { AuthService } from '../../shared/services/auth.service';
 
@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      exhaustMap(action =>
        this.authService.login(action.credentials).pipe(
          map(user => AuthApiActions.loginSuccess({ user })),
          catchError(error => of(AuthApiActions.loginFailure({ error })))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}