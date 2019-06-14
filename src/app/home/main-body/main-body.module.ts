import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body.component';
import { MainBodyRoutingModule } from './main-body-routing.module';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { SliderComponent } from './slider/slider.component';
import { ShowerModule } from './shower/shower.module';

@NgModule({
  declarations: [MainBodyComponent, SliderComponent],
  exports:[SliderComponent],
  imports: [
    CommonModule,
    MainBodyRoutingModule, 
    SharingModule,
    ShowerModule
  ]
})
export class MainBodyModule { }
