import { Injectable } from '@angular/core';
import { Book } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookList: Array<Book> = [];

  constructor(private http: HttpClient) {}

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

  updateBookmark(book: Book) {
    const id = book.id;
    console.log(book)
    return this.http.put(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books/${id}`,
      book
    );
  }

  deleteMovieById(id: string) {
    return this.http.delete<Book>(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books/${id}`
    );
  }

  searchBookList(name: string) {
    return this.http.get<Book[]>(
      `https://64f6f4259d7754084952d8a9.mockapi.io/Books?title=${name}`
    );
  }
  
  getBookmarksFromApi() {
    return this.http.get<Book>(
      'https://64f6f4259d7754084952d8a9.mockapi.io/Books?bookmark=true'
    );
  }

  // constructor() { }
}
