import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe.component';

@NgModule({
  declarations: [GheComponent],
  exports: [GheComponent],
  imports: [
    CommonModule
  ]
})
export class GheModule { }
