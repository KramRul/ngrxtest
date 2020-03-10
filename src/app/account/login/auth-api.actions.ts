import { createAction, props } from "@ngrx/store";
import { User } from "src/app/shared/models/user";

export const loginSuccess = createAction(
  "[Login Page] Login Success",
  props<{ user: User }>()
);

export const loginFailure = createAction(
  "[Login Page] Login Failure",
  props<{ error: any }>()
);
