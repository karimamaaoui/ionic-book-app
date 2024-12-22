import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ListBooksPageModule } from '../list-books/list-books.module';
import { ProfilePageModule } from '../profile/profile.module';
import { BooksPageModule } from '../books/books.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ListBooksPageModule, 
    ProfilePageModule,
    BooksPageModule,
],
  declarations: [DashboardPage,]
})
export class DashboardPageModule {}
