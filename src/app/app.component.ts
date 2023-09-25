import { Component } from '@angular/core';

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
}
export { Book, AppComponent };
