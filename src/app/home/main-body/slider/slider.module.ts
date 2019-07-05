import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    OwlModule
  ]
})
export class SliderModule {
 
}
