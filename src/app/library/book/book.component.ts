import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, switchMap } from 'rxjs';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: any;
  @Input() movieName = '';
  @Output() removeMovie = new EventEmitter();
  likeSubject = new Subject<number>();
  disLikeSubject = new Subject<number>();

  count = 0;
  increment() {
    console.log('incrementing');
    this.count++;
  }
  dcount = 0;
  decrement() {
    console.log('decrementing');
    this.dcount++;
  }
  show = true;
  toggleSummary() {
    this.show = !this.show;
  }
  constructor(private router: Router, private libraryService: LibraryService) {
    //   this.likeSubject
    //   .pipe(
    //     debounceTime(2000),
    //     switchMap((count) => {
    //       // this.movie = { ...this.movie, like: count };
    //       // return this.movieService.editMovieById(this.movie);
    //     })
    //   )
    //   .subscribe();
    // this.disLikeSubject
    //   .pipe(
    //     debounceTime(2000),
    //     switchMap((count) => {
    //       // this.movie = { ...this.movie, dislike: count };
    //       // return this.movieService.editMovieById(this.movie);
    //     })
    // )
    // .subscribe();
  }
  movieDetailsPage() {
    this.router.navigate([`/library`, this.book.id]);
  }
  deleteMovie() {
    this.libraryService.deleteMovieById(this.book.id).subscribe(() => {
      console.log('Movie deleted');
      this.removeMovie.emit();
      // this.movieService.getMovieListFromMockApi();
      // this.router.navigate(["/movies"])
    });
  }
  // (removeMovie)="loadMoviesData()"
  editPage() {
    this.router.navigate(['/library/edit', this.book.id]);
  }
}
