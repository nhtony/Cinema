import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung.component';
import { TableModule } from '../table/table.module';
import { DanhSachNguoiDungRoutingModule } from './danh-sach-nguoi-dung-routing.module';

@NgModule({
  declarations: [DanhSachNguoiDungComponent],
  exports:[DanhSachNguoiDungComponent],
  imports: [
    CommonModule,
    TableModule,
    DanhSachNguoiDungRoutingModule,
  ]
})
export class DanhSachNguoiDungModule { }
