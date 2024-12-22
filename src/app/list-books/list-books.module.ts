import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBooksPageRoutingModule } from './list-books-routing.module';

import { ListBooksPage } from './list-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBooksPageRoutingModule
  ],
  declarations: [ListBooksPage],
  exports: [ListBooksPage]
})
export class ListBooksPageModule {}
