import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/_core/sharedata/material.modules';
import { TableMovieComponent } from './table-movie/table-movie.component';
import { TableUserComponent } from './table-user/table-user.component';

@NgModule({
  declarations: [TableMovieComponent, TableUserComponent],
  exports:  [TableMovieComponent, TableUserComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TableModule { }
