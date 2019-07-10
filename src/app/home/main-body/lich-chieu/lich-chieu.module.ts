import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichChieuComponent } from './lich-chieu.component';
import { LichPhimComponent } from './lich-phim/lich-phim.component';
import { RapItemComponent } from './rap-item/rap-item.component';
import { PhimItemComponent } from './phim-item/phim-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LichChieuComponent, LichPhimComponent, RapItemComponent, PhimItemComponent,],
  exports: [LichChieuComponent, LichPhimComponent, PhimItemComponent, RapItemComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule
  ]
})
export class LichChieuModule { }
