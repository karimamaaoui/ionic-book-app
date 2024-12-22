import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBookModalPage } from './update-book-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBookModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBookModalPageRoutingModule {}
