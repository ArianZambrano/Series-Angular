import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SharedModule} from '../shared/shared.module';
import { EditSerieComponent } from './edit-serie.component';

@NgModule({
  declarations: [
    EditSerieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class EditSerieModule { }
