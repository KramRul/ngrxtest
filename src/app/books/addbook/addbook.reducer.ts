import { Action, createReducer, on } from "@ngrx/store";
import * as fromBooks from "./addbook.actions";
import { Book } from 'src/app/shared/models/book';

export const userLoginFeatureKey = "user";

export interface State {
  books: Array<Book>;
}

export const initialState: State = {
    books: new Array<Book>()
};

const booksReducer = createReducer(
  initialState,
  on(fromBooks.getCollectionBookIds, (state) => ({...state,
    books: state.books
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}