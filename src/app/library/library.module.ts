import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BookComponent } from './book/book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
// import { ViewChild } from '@angular/core';
// // import { MatSidenav } from '@angular/material';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    BookComponent,
    BooksListComponent,
    AddBooksComponent,
    EditBooksComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    // Component,
    // ViewChild,
    // MatSidenavModule,
    MatToolbarModule,
    // MatSidenav
  ],
})
export class LibraryModule {}
