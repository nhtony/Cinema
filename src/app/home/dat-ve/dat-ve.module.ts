import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeComponent } from './dat-ve.component';
import { DatVeRoutingModule } from './dat-ve-routing.module';

@NgModule({
  declarations: [DatVeComponent],
  imports: [
    CommonModule,
    DatVeRoutingModule
  ]
})
export class DatVeModule { }
