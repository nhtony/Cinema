import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemNguoiDungComponent } from './them-nguoi-dung.component';
import { ThemNguoiDungRoutingModule } from './them-nguoi-dung-routing.module';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [ThemNguoiDungComponent],
  exports: [ThemNguoiDungComponent],
  imports: [
    CommonModule,
    ThemNguoiDungRoutingModule,
    SharingModule
  ]
})
export class ThemNguoiDungModule { }
