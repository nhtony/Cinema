import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';


@NgModule({
  declarations: [DanhSachPhimComponent],
  exports: [DanhSachPhimComponent],
  imports: [
    CommonModule,

  ]
})
export class DanhSachPhimModule { }
