import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemNguoiDungComponent } from './them-nguoi-dung.component';
import { ThemNguoiDungRoutingModule } from './them-nguoi-dung-routing.module';
import { AdminFormModule } from '../admin-form/admin-form.module';

@NgModule({
  declarations: [ThemNguoiDungComponent],
  exports: [ThemNguoiDungComponent],
  imports: [
    CommonModule,
    ThemNguoiDungRoutingModule,
    AdminFormModule
  ]
})
export class ThemNguoiDungModule { }
