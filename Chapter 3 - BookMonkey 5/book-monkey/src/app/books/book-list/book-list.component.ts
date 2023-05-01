import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[] = [];
  @Output() selectBook = new EventEmitter<Book>();



  doSelect(book: Book){
    this.selectBook.emit(book);
  }

  constructor(private service: BookStoreService) {
    this.books = this.service.getAll();
  }
}
