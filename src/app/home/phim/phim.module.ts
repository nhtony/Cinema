import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimComponent } from './phim.component';
import { PhimRoutingModule } from './phim-routing.module';


@NgModule({
  declarations: [PhimComponent],
  exports: [PhimComponent],
  imports: [
    CommonModule,
    PhimRoutingModule
  ]
})
export class PhimModule { }
