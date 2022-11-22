import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
	path: '',
	redirectTo: 'login',
	pathMatch: 'full'
  },
  {
	path: 'login',
	loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
	path: 'register',
	loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
	path: 'main',
	loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
	path: 'route-list',
	loadChildren: () => import('./pages/route-list/route-list.module').then( m => m.RouteListPageModule)
  },
  {
	path: 'route-view',
	loadChildren: () => import('./pages/route-view/route-view.module').then( m => m.RouteViewPageModule)
  },
  {
	path: 'route-edit',
	loadChildren: () => import('./pages/route-edit/route-edit.module').then( m => m.RouteEditPageModule)
  },
  {
	path: 'passenger-list',
	loadChildren: () => import('./pages/passenger-list/passenger-list.module').then( m => m.PassengerListPageModule)
  },
  {
	path: 'passenger-view',
	loadChildren: () => import('./pages/passenger-view/passenger-view.module').then( m => m.PassengerViewPageModule)
  },
  {
	path: 'passenger-edit',
	loadChildren: () => import('./pages/passenger-edit/passenger-edit.module').then( m => m.PassengerEditPageModule)
  },
  {
	path: 'account-view',
	loadChildren: () => import('./pages/account-view/account-view.module').then( m => m.AccountViewPageModule)
  },
  {
	path: 'account-edit',
	loadChildren: () => import('./pages/account-edit/account-edit.module').then( m => m.AccountEditPageModule)
  },
  {
	path: 'settings',
	loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
	RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
