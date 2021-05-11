import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditSerieComponent } from './modules/edit-serie/edit-serie.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { UploadSerieComponent } from './modules/upload-serie/upload-serie.component';
import { UploadSerieModule } from './modules/upload-serie/upload-serie.module';

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
    path: 'create',
    component: UploadSerieComponent
  },
  {
    path: 'edit',
    component: EditSerieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
