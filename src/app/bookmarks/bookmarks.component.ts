import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibraryService } from '../library.service';
import { Book } from '../app.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  getMovieList: Subscription | any;
  bookList: Array<Book> = [];

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit() {
  this.getMovieList = this.libraryService
  .getBookmarksFromApi()
  .subscribe((mvList: any) => {
    this.bookList = mvList;
  });
}
}
