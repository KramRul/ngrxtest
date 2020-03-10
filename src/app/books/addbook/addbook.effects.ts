import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, concatMap, withLatestFrom } from 'rxjs/operators';

import * as AddBooksApiActions from './addbook.api.actions';
import * as fromBooks from './addbook.reducer';
 
@Injectable()
export class CollectionEffects {
  addBookToCollectionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AddBooksApiActions.addBookSuccess),
        concatMap(action => of(action).pipe(
          withLatestFrom(this.store.pipe(select(fromBooks.reducer)))
        )),
        tap(([action, bookState]) => {
          if (bookState.books.length === 1) {
            window.alert('Congrats on adding your first book!');
          } else {
            window.alert('You have added book number ' + bookState.books.length);
          }
        })
      ),
    { dispatch: false }
  );
 
  constructor(
    private actions$: Actions,
    private store: Store<fromBooks.State>
  ) {}
}