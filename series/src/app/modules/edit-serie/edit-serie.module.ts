import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { EditSerieComponent } from './edit-serie.component';

@NgModule({
  declarations: [
    EditSerieComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EditSerieModule { }
