import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/_core/sharedata/material.modules';
@NgModule({
  declarations: [AdminLoginComponent],
  exports: [FormsModule, ReactiveFormsModule],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminLoginModule { }
