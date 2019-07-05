import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowerComponent } from './shower.component';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@NgModule({
  declarations: [ShowerComponent,MovieCardComponent],
  exports: [ShowerComponent,MovieCardComponent],
  imports: [
    CommonModule,
    SharingModule,
    OwlModule
  ]
})
export class ShowerModule { }
