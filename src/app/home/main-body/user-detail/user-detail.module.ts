import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/_core/sharedata/material.modules';

@NgModule({
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UserDetailModule { }
