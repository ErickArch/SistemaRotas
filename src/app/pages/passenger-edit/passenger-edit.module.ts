import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerEditPageRoutingModule } from './passenger-edit-routing.module';

import { PassengerEditPage } from './passenger-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerEditPageRoutingModule
  ],
  declarations: [PassengerEditPage]
})
export class PassengerEditPageModule {}
