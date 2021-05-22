import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component'


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
