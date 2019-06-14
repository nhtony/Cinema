import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemPhimComponent } from './them-phim.component';
import { ThemPhimRoutingModule } from './them-phim-routing.module';

import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [ThemPhimComponent],
  imports: [
    CommonModule,
    ThemPhimRoutingModule,
    SharingModule
  ]
})
export class ThemPhimModule { }
