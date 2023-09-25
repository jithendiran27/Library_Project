import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../app.component';
import { MatChipInputEvent } from '@angular/material/chips';
import { LANGUAGES, GENRES } from './global';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css'],
})
export class AddBooksComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  languages = LANGUAGES;

  genres = GENRES;

  movieForm = this.fb.group({
    like: 0,
    dislike: 0,
    title: ['', [Validators.required, Validators.minLength(5)]],
    author: ['', [Validators.required, Validators.minLength(5)]],
    featured: [false],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    publishedYear: ['', [Validators.required]],
    censorRating: ['', [Validators.required]],
    genre: [[], [Validators.required]],
    languages: [[], [Validators.required]],
    // cast: this.fb.array([]),
    coverImageUrl: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    description: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });

  // movieList;
  // DI - Dependency Injection
  constructor(
    private movieService: LibraryService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.movieList = movieService.getMovieList();
  }

  get title() {
    return this.movieForm?.get('name');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }

  get coverImageUrl() {
    return this.movieForm?.get('coverImageUrl');
  }

  get description() {
    return this.movieForm?.get('description');
  }

  get trailer() {
    return this.movieForm?.get('trailer');
  }
  // get cast() {
  //   return this.movieForm.get('cast') as FormArray;
  // }
  get genre() {
    return this.movieForm?.get('genre');
  }
  get publishedYear() {
    return this.movieForm?.get('publishedYear');
  }

  // addCastName(event: MatChipInputEvent) {
  //   const name = (event.value || '').trim();
  //   if (name) {
  //     this.cast.push(this.fb.control(name));
  //   }

  //   event.chipInput!.clear();
  // }

  // removeCastName(index: number) {
  //   this.cast.removeAt(index);
  // }

  addMovie() {
    console.log('New Book Added');

    // if (this.movieForm.valid) {
    const newMovie = this.movieForm.value;
    console.log(newMovie);
    // this.movieService.setMovieList(newMovie as Movie);
    this.movieService.createMovie(newMovie as unknown as Book).subscribe(() => {
      this.router.navigate(['/library']);
    });
    // }
  }
}
