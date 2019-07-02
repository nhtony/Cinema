import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichChieuComponent } from './lich-chieu.component';
import { BrandItemComponent } from './brand-item/brand-item.component';
import { BrandContentComponent } from './brand-content/brand-content.component';
import { LichPhimComponent } from './lich-phim/lich-phim.component';


@NgModule({
  declarations: [LichChieuComponent, BrandItemComponent, BrandContentComponent, BrandItemComponent, LichPhimComponent,],
  exports: [LichChieuComponent, BrandItemComponent,LichPhimComponent,],
  imports: [
    CommonModule
  ]
})
export class LichChieuModule { }
