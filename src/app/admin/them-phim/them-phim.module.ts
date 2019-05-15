import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemPhimComponent } from './them-phim.component';
import { ThemPhimRoutingModule } from './them-phim-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThemPhimComponent],
  imports: [
    CommonModule,
    ThemPhimRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ThemPhimModule { }
