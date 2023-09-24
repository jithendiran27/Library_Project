import { Component } from '@angular/core';

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;

  publishedYear: number;
  description: string;
  coverImageUrl: string;

  // poster: string;
  rating: number;
  // summary: string;
  trailer: string;
  featured: boolean;
  like: number;
  dislike: number;
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
