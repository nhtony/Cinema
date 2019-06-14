import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DanhSachPhimComponent],
  exports:[FormsModule],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    SharingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ]
})
export class DanhSachPhimModule { }
