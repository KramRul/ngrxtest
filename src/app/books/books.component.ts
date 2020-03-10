import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/models/book';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]> = this.store.select(state => state.books);
  
  constructor(private store: Store<{ books: Book[] }>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Books Page] Load Books' });
  }

}
