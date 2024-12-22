import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'list-books',
    loadChildren: () => import('../list-books/list-books.module').then(m => m.ListBooksPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
  },
  
  {
    path: 'books',
    loadChildren: () => import('../books/books.module').then( m => m.BooksPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
