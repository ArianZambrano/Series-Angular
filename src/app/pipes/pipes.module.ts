import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keys/keys.pipe';

@NgModule({
  declarations: [KeysPipe],
  imports: [
    CommonModule
  ],
  providers: [KeysPipe],
  exports: [KeysPipe]
})
export class PipesModule { }
