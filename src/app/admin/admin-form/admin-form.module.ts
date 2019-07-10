import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { MaterialModule } from 'src/_core/sharedata/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FormUserComponent, FormMovieComponent],
  exports: [FormUserComponent, FormMovieComponent,FormsModule,ReactiveFormsModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminFormModule { }
