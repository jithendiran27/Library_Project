import { Component, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LibraryService } from './library.service';
import { Router } from '@angular/router';
// import { MatSidenav } from '@angular/material';

type Book = {
  id: string;
  title: string;
  author: string;
  genres: Array<string>;

  publishedYear: number;
  description: string;
  coverImageUrl: string;

  // poster: string;
  rating: number;
  // summary: string;
  // trailer: string;
  bookmark: boolean;
  like: number;
  dislike: number;
  languages: Array<string>;
  // date: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
class AppComponent {
  // @Input() book: any;
  bookList: Array<Book> = [];
  title = 'Angular_Project';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(private router: Router, private libraryService: LibraryService) {}
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  add() {
    this.router.navigate(['/library/add']);
  }
  home() {
    this.router.navigate(['/library']);
  }
  bookmarksList() {
    this.router.navigate(['/bookmarks']);
  }
}
export { Book, AppComponent };
