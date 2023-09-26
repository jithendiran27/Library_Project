import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import { MatSidenav } from '@angular/material';

type Book = {
  id: string;
  title: string;
  author: string;
  genres: Array<string>;

  publishedYear: string;
  description: string;
  coverImageUrl: string;

  // poster: string;
  rating: number;
  // summary: string;
  // trailer: string;
  // featured: boolean;
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
  title = 'Angular_Project';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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
}
export { Book, AppComponent };
