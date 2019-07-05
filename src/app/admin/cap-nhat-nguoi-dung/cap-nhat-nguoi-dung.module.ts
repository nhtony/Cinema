import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapNhatNguoiDungComponent } from './cap-nhat-nguoi-dung.component';
import { CapNhatNguoiDungRoutingModule } from './cap-nhat-nguoi-dung-routing.module';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [CapNhatNguoiDungComponent],
  exports:  [CapNhatNguoiDungComponent],
  imports: [
    CommonModule,
    CapNhatNguoiDungRoutingModule,
    SharingModule
  ]
})
export class CapNhatNguoiDungModule { }
