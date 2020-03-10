import { createAction, props } from "@ngrx/store";
import { Credentials } from 'src/app/shared/models/credentials';

export const login = createAction(
  "[Login Page] Login",
  props<{ credentials: Credentials }>()
);
