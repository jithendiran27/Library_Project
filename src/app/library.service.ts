import { Injectable } from '@angular/core';
import { Book } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookList: Array<Book> = [];

  constructor(private http: HttpClient) {}

  // getMovieList() {
  //   return this.movies;
  // }
  getMovieListFromMockApi() {
    return this.http.get<Book>(
      'https://64f6f4259d7754084952d8a9.mockapi.io/Books'
    );
  }
  getMovieById(id: string) {
    return this.http.get<Book>(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books/${id}`
    );
  }

  createBook(newBook: Book) {
    return this.http.post(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books`,
      newBook
    );
  }

  editBookById(editedBook: Book) {
    const id = editedBook.id;
    console.log(id);
    return this.http.put(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books/${id}`,
      editedBook
    );
  }

  // editMovie(editedBook: Book) {
  //   console.log(this.bookList);
  //   const id = editedBook.id;
  //   const index = this.bookList.findIndex((bk) => bk.id === id);
  //   this.bookList.splice(index, 1, editedBook);
  //   // this.movieList.push(newMovie);
  // }
  // addMovie(){
  //   return this.http.post<Movie[]>(
  //     'https://64f6f4259d7754084952d8a9.mockapi.io/movies', movie
  //   )
  // }

  deleteMovieById(id: string) {
    return this.http.delete<Book>(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books/${id}`
    );
  }

  // setMovieList(newMovie: Movie) {
  //   return this.movies.push(newMovie);
  // }
  searchBookList(name: string) {
    return this.http.get<Book[]>(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books?title=${name}`
    );
  }

  // constructor() { }
}
