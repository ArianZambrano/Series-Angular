import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { SeriesComponent } from './components/series/series.component';
import { MainPageComponent } from './main-page.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    HeroComponent,
    SeriesComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    SharedModule
  ],
  exports: [MainPageComponent],
  providers: []
})
export class MainPageModule { }
