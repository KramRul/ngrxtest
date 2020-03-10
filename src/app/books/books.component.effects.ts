import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BooksService } from '../shared/services/books.service';
 
@Injectable()
export class BookEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Books Page] Load Books'),
    mergeMap(() => this.booksService.getAll()
      .pipe(
        map(books => ({ type: '[Books API] Books Loaded Success', payload: books })),
        catchError(() => of({ type: '[Books API] Books Loaded Error' }))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}