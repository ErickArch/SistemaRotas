import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteEditPage } from './route-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RouteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteEditPageRoutingModule {}
