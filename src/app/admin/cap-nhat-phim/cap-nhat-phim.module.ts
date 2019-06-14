import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapNhatPhimComponent } from './cap-nhat-phim.component';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { CapNhatPhimRoutingModule } from './cap-nhat-phim-routing.module';

@NgModule({
  declarations: [CapNhatPhimComponent],
  imports: [
    CommonModule,
    SharingModule,
    CapNhatPhimRoutingModule,
  ]
})
export class CapNhatPhimModule { }
