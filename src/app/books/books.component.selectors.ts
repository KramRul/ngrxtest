import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../shared/models/book';
export const featureKey = 'feature';
export interface User {
  id: number;
  name: string;
}
 
export interface BooksFeatureState {
  selectedUser: User;
  allBooks: Book[];
}
 
export interface AppState {
    feature: BooksFeatureState;
  }

export const selectUser = (state: BooksFeatureState) => state.selectedUser;
export const selectAllBooks = (state: BooksFeatureState) => state.allBooks;
 
export const selectFeature  = createFeatureSelector<AppState, BooksFeatureState>(featureKey);

export const selectVisibleBooks = createSelector(
    selectFeature,
    (state: BooksFeatureState) => {
      if (state.selectedUser && state.allBooks) {
        return state.allBooks.filter((book: Book) => book.userId === state.selectedUser.id);
      } else {
        return state.allBooks;
      }
    }
  );