import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapNhatPhimComponent } from './cap-nhat-phim.component';
import { CapNhatPhimRoutingModule } from './cap-nhat-phim-routing.module';
import { AdminFormModule } from '../admin-form/admin-form.module';

@NgModule({
  declarations: [CapNhatPhimComponent],
  imports: [
    CommonModule,
    AdminFormModule,
    CapNhatPhimRoutingModule,
  ]
})
export class CapNhatPhimModule { }
