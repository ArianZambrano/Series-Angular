import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SeriesComponent } from './components/series/series.component';
import { MainPageComponent } from './main-page.component';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    SeriesComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PipesModule
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class MainPageModule { }
