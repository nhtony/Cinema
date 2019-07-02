import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/_core/sharedata/material.modules';

import { FormReactiveComponent } from '../common/form-reactive/form-reactive.component';

import {NavBarComponent} from '../common/nav-bar/nav-bar.component';

import { MovieCardComponent } from '../common/movie-card/movie-card.component';

import { ModalComponent } from '../common/modal/modal.component';

import { ActionFormComponent } from '../common/action-form/action-form.component';

import { VideoComponent } from '../common/video/video.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TimeTableComponent } from '../home/phim/time-table/time-table.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule, ReactiveFormsModule,NgxSpinnerModule],

  declarations: [ FormReactiveComponent,NavBarComponent,MovieCardComponent,ModalComponent,ActionFormComponent,VideoComponent,TimeTableComponent],

  exports: [CommonModule, FormsModule, ReactiveFormsModule, FormReactiveComponent,NavBarComponent,MovieCardComponent,ModalComponent,ActionFormComponent,VideoComponent,TimeTableComponent]
  
})
export class SharingModule { }
