import { Action, createReducer, on } from "@ngrx/store";
import * as LoginComponentActions from "../login/login.component.actions";

export const userLoginFeatureKey = "user";

export interface State {
  username: string;
  password: string;
}

export const initialState: State = {
  username: "",
  password: ""
};

const loginReducer = createReducer(
  initialState,
  on(LoginComponentActions.login, (state, { credentials }) => ({
    username: credentials.username,
    password: credentials.password
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
