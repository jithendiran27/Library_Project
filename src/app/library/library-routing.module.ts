import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: BooksListComponent, pathMatch: 'full' },
  { path: 'add', component: AddBooksComponent },
  { path: ':id', component: BookDetailsComponent },
  { path: 'edit/:id', component: EditBooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
