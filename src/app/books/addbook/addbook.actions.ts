import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/shared/models/book";

export const addBook = createAction(
  "[Add Book Page] Add Book",
  props<{ book: Book }>()
);

export const getCollectionBookIds = createAction(
  "[Add Book Page] Get Collection Book Ids"
);
