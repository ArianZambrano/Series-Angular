import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditSerieComponent } from './modules/edit-serie/edit-serie.component';
import { MainPageComponent } from './modules/main-page/main-page.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/series',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: MainPageComponent
  },
  {
    path: 'edit/:name',
    component: EditSerieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
