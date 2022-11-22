import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerViewPageRoutingModule } from './passenger-view-routing.module';

import { PassengerViewPage } from './passenger-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerViewPageRoutingModule
  ],
  declarations: [PassengerViewPage]
})
export class PassengerViewPageModule {}
