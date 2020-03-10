import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AddbookComponent } from './addbook/addbook.component';


@NgModule({
  declarations: [BooksComponent, AddbookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
