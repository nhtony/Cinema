import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimComponent } from './phim.component';
import { PhimRoutingModule } from './phim-routing.componet';
import { MaterialModule } from 'src/_core/sharedata/material.modules';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [PhimComponent, ReviewComponent],
  imports: [
    CommonModule,
    PhimRoutingModule,
    MaterialModule,
    SharingModule,
  ]
})
export class PhimModule { }
