import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
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

  // book: Array<Book> = [];

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
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private libraryService: LibraryService
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
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
  // movieDetailsPage() {
  //   this.router.navigate([`/library`, this.book.id]);
  // }
  deleteMovie() {
    this.libraryService.deleteMovieById(this.book.id).subscribe(() => {
      console.log('Book deleted');
      this.removeMovie.emit();
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
}
