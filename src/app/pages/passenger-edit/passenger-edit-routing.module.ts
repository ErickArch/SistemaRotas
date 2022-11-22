import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerEditPage } from './passenger-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PassengerEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerEditPageRoutingModule {}
