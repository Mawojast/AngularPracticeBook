import { Component } from '@angular/core';
import { Subject, filter, debounceTime, distinctUntilChanged, switchMap, tap, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();
  results$: Observable<Book[]>;
  isLoading = false;

  constructor(private service: BookStoreService){
    this.results$ = this.input$
    .pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      distinctUntilChanged((a,b) => {
        return JSON.stringify(a) === JSON.stringify(b);
      }),
      tap(() => this.isLoading = true),
      switchMap(term => this.service.getAllSearch(term)),
      tap(() => this.isLoading = false)
      );
  }
}
