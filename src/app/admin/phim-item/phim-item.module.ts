import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimItemComponent } from './phim-item.component';

@NgModule({
  declarations: [PhimItemComponent],
  exports: [PhimItemComponent],
  imports: [
    CommonModule
  ]
})
export class PhimItemModule { }
