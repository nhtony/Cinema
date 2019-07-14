import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body.component';
import { MainBodyRoutingModule } from './main-body-routing.module';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { ShowerModule } from './shower/shower.module';
import { SliderModule } from './slider/slider.module';
import { LichChieuModule } from './lich-chieu/lich-chieu.module';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

@NgModule({
  declarations: [MainBodyComponent,],
  exports:[],
  imports: [
    CommonModule,
    MainBodyRoutingModule, 
    SharingModule,
    ShowerModule,
    SliderModule,
    LichChieuModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule
  ]
})
export class MainBodyModule { }
