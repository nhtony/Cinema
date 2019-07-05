import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/_core/sharedata/material.modules';

@NgModule({
  declarations: [TableComponent],
  exports:  [TableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TableModule { }
