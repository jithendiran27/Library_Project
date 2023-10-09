import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, switchMap } from 'rxjs';
import { Book } from 'src/app/app.component';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  id: string = '';
  book: any;
  @Input() movieName = '';
  @Output() removeMovie = new EventEmitter();
  likeSubject = new Subject<number>();
  disLikeSubject = new Subject<number>();

  incrementLike() {
    const d = this.book.like++;
    // this.like++;
    this.likeCount(d);
  }

  incrementDisLike() {
    const l = this.book.dislike++;
    // this.disLike++;
    this.disLikeCount(l);
  }

  // bookmark = false;
  changeBookmark() {
    this.book.bookmark = !this.book.bookmark;
    this.libraryService.updateBookmark(this.book as Book).subscribe(() => {
      // this.router.navigate(['/library']);
    });
  }

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private libraryService: LibraryService
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
    this.likeSubject
      .pipe(
        debounceTime(2000),
        switchMap((count) => {
          this.book = { ...this.book, like: count + 1 };
          return this.libraryService.editBookById(this.book);
        })
      )
      .subscribe();
    this.disLikeSubject
      .pipe(
        debounceTime(2000),
        switchMap((count) => {
          this.book = { ...this.book, dislike: count + 1 };
          return this.libraryService.editBookById(this.book);
        })
      )
      .subscribe();
  }

  deleteMovie() {
    this.libraryService.deleteMovieById(this.book.id).subscribe(() => {
      console.log('Book deleted');
      this.removeMovie.emit();
      this.route.navigate(['/library']);
      // this.movieService.getMovieListFromMockApi();
      // this.router.navigate(["/movies"])
    });
  }
  // (removeMovie)="loadMoviesData()"
  editPage() {
    this.route.navigate(['/library/edit', this.book.id]);
  }
  ngOnInit() {
    this.libraryService.getMovieById(this.id).subscribe((bk: any) => {
      this.book = { ...bk };
    });
  }
  likeCount(count: number) {
    // publish data
    this.likeSubject.next(count);
  }

  disLikeCount(count: number) {
    this.disLikeSubject.next(count);
  }
  
}
