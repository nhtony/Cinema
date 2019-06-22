import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimComponent } from './phim.component';
import { PhimRoutingModule } from './phim-routing.componet';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';


@NgModule({
  declarations: [PhimComponent, GheComponent, DanhSachGheComponent],
  imports: [
    CommonModule,
    PhimRoutingModule
  ]
})
export class PhimModule { }
