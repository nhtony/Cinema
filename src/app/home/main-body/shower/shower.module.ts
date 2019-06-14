import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowerComponent } from './shower.component';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselComponent } from 'src/app/common/carousel/carousel.component';
@NgModule({
  declarations: [ShowerComponent,CarouselComponent],
  exports: [ShowerComponent,CarouselComponent],
  imports: [
    CommonModule,
    SharingModule,
    NguCarouselModule
  ]
})
export class ShowerModule { }
