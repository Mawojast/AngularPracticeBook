import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BooksRoutingModule } from './books-routing.module';
import { IsbnPipe } from './shared/isbn.pipe';


@NgModule({
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    IsbnPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
})
export class BooksModule { }
