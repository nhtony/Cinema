import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemPhimComponent } from './them-phim.component';
import { ThemPhimRoutingModule } from './them-phim-routing.module';
import { AdminFormModule } from '../admin-form/admin-form.module';

@NgModule({
  declarations: [ThemPhimComponent],
  imports: [
    CommonModule,
    ThemPhimRoutingModule,
    AdminFormModule
  ]
})
export class ThemPhimModule { }
