import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapComponent } from './rap.component';
import { RapRoutingModule } from './rap-routing.module';

@NgModule({
  declarations: [RapComponent],
  imports: [
    CommonModule,
    RapRoutingModule
  ]
})
export class RapModule { }
