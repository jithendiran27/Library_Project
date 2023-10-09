import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/app.component';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css'],
})
export class EditBooksComponent {
  languages = [
    { label: 'English', value: 'English' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German' },
  ];

  genres = [
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Historical', value: 'Historical' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Musical', value: 'Musical' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Science Fiction', value: 'Science Fiction' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'War', value: 'War' },
    { label: 'Western', value: 'Western' },
    { label: 'Economics', value: 'Economics' },
    { label: 'Political Philosophy', value: 'Political Philosophy' },
  ];

  id: string = '';

  book: Book = {
    id: '',
    title: '',
    author: '',
    genres: [''],
    coverImageUrl: '',
    publishedYear: 0,
    rating: 0,
    description: '',
    like: 0,
    dislike: 0,
    languages: [''],
    bookmark: false,
  };

  movieForm = this.fb.group({
    id: '',
    like: [0, [Validators.required]],
    dislike: [0, [Validators.required]],
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    // featured: [false],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
    publishedYear: [0, [Validators.required, Validators.minLength(4)]],
    // censorRating: ['', [Validators.required]],
    genres: [[''], [Validators.required]],
    languages: [[''], [Validators.required]],
    // cast: this.fb.array([]),
    // chosenYearDate: Date,
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
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private libraryService: LibraryService,
    private router: Router
  ) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.libraryService.getMovieById(this.id).subscribe((mv) => {
      console.log(mv);
      this.movieForm.patchValue(mv);
    });
  }

  get title() {
    return this.movieForm?.get('name');
  }

  get author() {
    return this.movieForm?.get('author');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }
  get like() {
    return this.movieForm?.get('like');
  }
  get dislike() {
    return this.movieForm?.get('dislike');
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

  editBook() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const editedBook = this.movieForm.value;
      console.log(editedBook);
      // this.movieService.updateMovie(updatedMovie as Movie);

      this.libraryService.editBookById(editedBook as Book).subscribe(() => {
        this.router.navigate(['/library']);
      });
    }
  }
}
