import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body.component';
import { MainBodyRoutingModule } from './main-body-routing.module';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { ShowerModule } from './shower/shower.module';
import { SliderModule } from './slider/slider.module';

@NgModule({
  declarations: [MainBodyComponent],
  exports:[],
  imports: [
    CommonModule,
    MainBodyRoutingModule, 
    SharingModule,
    ShowerModule,
    SliderModule
  ]
})
export class MainBodyModule { }
