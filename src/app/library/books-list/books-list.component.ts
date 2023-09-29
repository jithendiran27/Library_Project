import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Book } from 'src/app/app.component';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  bookList: Array<Book> = [];
  getMovieList: Subscription | any;
  search_book: string = '';
  // movieService: any;
  searchForm = this.fb.group({
    search: '',
  });

  get search() {
    return this.searchForm.get('search');
  }

  constructor(private libraryService: LibraryService, private fb: FormBuilder) {
    // this.moviesList = movieService.movies;
  }
  ngOnInit() {
    // this.getMovieList = this.movieService
    //   .getMovieListFromMockApi()
    //   .subscribe((mvList: any) => {
    //     this.movieList = mvList;
    //   });
    this.search?.valueChanges
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        switchMap((name) => this.libraryService.searchBookList(name || ''))
      )
      .subscribe((mvList) => {
        this.bookList = mvList;
      });
    this.loadBooksData();
  }

  loadBooksData() {
    this.getMovieList = this.libraryService
      .getMovieListFromMockApi()
      .subscribe((mvList: any) => {
        this.bookList = mvList;
      });
    console.log(this.search_book);
  }

  ngOnDestroy() {
    console.log('Destory');
    this.getMovieList.unsubscribe();
  }
}
