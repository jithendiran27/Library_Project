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
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    // featured: [false],
    rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    publishedYear: [
      0,
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
    // censorRating: ['', [Validators.required]],
    genres: [[], [Validators.required]],
    languages: [[], [Validators.required]],
    coverImageUrl: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    description: ['', [Validators.required, Validators.minLength(20)]],
  });

  constructor(
    private movieService: LibraryService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get title() {
    return this.movieForm?.get('name');
  }

  get author() {
    return this.movieForm?.get('author');
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

  get publishedYear() {
    return this.movieForm?.get('publishedYear');
  }

  addBook() {
    console.log('New Book Added');

    // if (this.movieForm.valid) {
    const newBook = this.movieForm.value;
    console.log(newBook);
    // this.movieService.setMovieList(newBook as Movie);
    this.movieService.createBook(newBook as unknown as Book).subscribe(() => {
      this.router.navigate(['/library']);
    });
    // }
  }
}
