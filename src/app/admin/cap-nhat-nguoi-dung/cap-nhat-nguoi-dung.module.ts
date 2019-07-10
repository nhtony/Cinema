import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapNhatNguoiDungComponent } from './cap-nhat-nguoi-dung.component';
import { CapNhatNguoiDungRoutingModule } from './cap-nhat-nguoi-dung-routing.module';
import { AdminFormModule } from '../admin-form/admin-form.module';

@NgModule({
  declarations: [CapNhatNguoiDungComponent],
  exports:  [CapNhatNguoiDungComponent],
  imports: [
    CommonModule,
    CapNhatNguoiDungRoutingModule,
    AdminFormModule
  ]
})
export class CapNhatNguoiDungModule { }
