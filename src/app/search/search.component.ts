import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LibraryService } from '../library.service';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Book } from '../app.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
class SearchComponent {
  bookList: Array<Book> = [];
  getMovieList: Subscription | any;
  search_book: string = '';
  @Input() book: any;
  // @Output() searchList = new EventEmitter();

  searchForm = this.fb.group({
    search: '',
  });


  get search() {
    return this.searchForm.get('search');
  }

  constructor(
    private libraryService: LibraryService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
  
    this.search?.valueChanges
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        switchMap((name) => 
        this.libraryService.searchBookList(name || '')
        )
      )
      .subscribe((mvList) => {
        this.bookList = mvList;
        // this.searchList.emit();
        this.libraryService.changeBookList(this.bookList)
        // this.router.navigate([`/library`, this.bookList.id]);
        // console.log(this.libraryService.changeBookList);
      });
  }
  movieDetailsPage() {
    this.router.navigate([`/library`, this.book.id]);
    console.log(this.book.id)
  }
}

export { SearchComponent };
