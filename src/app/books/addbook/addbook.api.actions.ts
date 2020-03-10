import { createAction, props } from "@ngrx/store";
import { Book } from 'src/app/shared/models/book';

export const addBookSuccess = createAction(
  "[Add Book Api] Add Book Success",
  props<{ book: Book }>()
);