import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule, 
    SharingModule,
    MainRoutingModule,
    
  ]
})
export class MainModule { }
