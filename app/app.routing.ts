import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicSheetComponent } from './components/music-sheet/music-sheet.component'
import { StartDashboardComponent } from './components/start-dashboard/start-dashboard.component'

// import components here

const appRoutes: Routes = [
  {
    path: 'musicSheet',
    component: MusicSheetComponent
  },
  {
    path : '',
    redirectTo: 'startDashboard',
    pathMatch: 'full'
  },
  {
    path : 'startDashboard',
    component : StartDashboardComponent
  }
/* routes here :
examples:
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
  	path: 'dashboard',
  	component : DashboardComponent
  },
  {
  	path: '',
  	redirectTo: '/dashboard',
  	pathMatch: 'full'
  },
  {
  	path: 'detail/:id',
  	component: HeroDetailComponent
  }
  */
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);