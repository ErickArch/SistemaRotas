import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteEditPageRoutingModule } from './route-edit-routing.module';

import { RouteEditPage } from './route-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteEditPageRoutingModule
  ],
  declarations: [RouteEditPage]
})
export class RouteEditPageModule {}
