import { Component, Input } from '@angular/core';
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
  // @Input() searchList = '';
  bookList: any;
  getMovieList: Subscription | any;
  // search_book: string = '';
  searchForm = this.fb.group({
    search: '',
  });

  get search() {
    return this.searchForm.get('search');
  }

  constructor(
    private libraryService: LibraryService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    // this.search?.valueChanges
    //   .pipe(
    //     debounceTime(1500),
    //     distinctUntilChanged(),
    //     switchMap((name) => this.libraryService.searchBookList(name || ''))
    //   )
    //   .subscribe((mvList) => {
    //     this.bookList = mvList;
    //   });
    // this.getMovieList = this.searchList
    // console.log(this.getMovieList)
    // this.libraryService.getBookmarksFromApi().subscribe(()=>{})
    this.getBooks();
    this.loadBooksData();
  }

  getBooks() {
    this.getMovieList = this.libraryService.getMovieListFromMockApi().subscribe((bookList:any)=>{
      this.bookList=bookList;
    })
  }

  loadBooksData() {
    this.getMovieList = this.libraryService.currentBookList
      .subscribe((bookList: any) => {
        this.bookList = bookList;
        console.log(bookList);
      });
  }

  ngOnDestroy() {
    console.log('Destory');
    this.getMovieList.unsubscribe();
  }
}
