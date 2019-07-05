import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [DanhSachPhimComponent],
  exports:[FormsModule],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class DanhSachPhimModule { }
