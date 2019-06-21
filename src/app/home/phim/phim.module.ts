import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimComponent } from './phim.component';
import { PhimRoutingModule } from './phim-routing.componet';


@NgModule({
  declarations: [PhimComponent],
  imports: [
    CommonModule,
    PhimRoutingModule
  ]
})
export class PhimModule { }
