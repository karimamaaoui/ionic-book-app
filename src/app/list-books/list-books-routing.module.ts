import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBooksPage } from './list-books.page';

const routes: Routes = [
  {
    path: '',
    component: ListBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBooksPageRoutingModule {}
