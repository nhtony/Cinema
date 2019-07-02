import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { MaterialModule } from 'src/_core/sharedata/material.modules';

@NgModule({
  declarations: [DanhSachPhimComponent,TableComponent],
  exports:[FormsModule,TableComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DanhSachPhimModule { }
