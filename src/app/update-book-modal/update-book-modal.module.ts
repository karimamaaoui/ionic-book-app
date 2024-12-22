import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookModalPageRoutingModule } from './update-book-modal-routing.module';

import { UpdateBookModalPage } from './update-book-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookModalPageRoutingModule
  ],
  declarations: [UpdateBookModalPage]
})
export class UpdateBookModalPageModule {}
