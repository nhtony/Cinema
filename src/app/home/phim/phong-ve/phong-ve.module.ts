import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongVeComponent } from './phong-ve.component';
import { PhongVeRoutingModule } from './phong-ve-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GheModule } from '../ghe/ghe.module';
import { ComboComponent } from './combo/combo.component';


@NgModule({
  declarations: [PhongVeComponent, ComboComponent],
  imports: [
    CommonModule,
    PhongVeRoutingModule,
    ScrollingModule,
    GheModule
  ]
})
export class PhongVeModule { }
