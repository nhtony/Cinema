import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/_core/sharedata/material.modules';

import { TableComponent } from '../common/table/table.component';

import { FormReactiveComponent } from '../common/form-reactive/form-reactive.component';

import {NavBarComponent} from '../common/nav-bar/nav-bar.component';

import { MovieCardComponent } from '../common/movie-card/movie-card.component';

import { ModalComponent } from '../common/modal/modal.component';

import { ActionFormComponent } from '../common/action-form/action-form.component';

import { VideoComponent } from '../common/video/video.component';



@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule, ReactiveFormsModule],

  declarations: [TableComponent, FormReactiveComponent,NavBarComponent,MovieCardComponent,ModalComponent,ActionFormComponent,VideoComponent],

  exports: [TableComponent, CommonModule, FormsModule, ReactiveFormsModule, FormReactiveComponent,NavBarComponent,MovieCardComponent,ModalComponent,ActionFormComponent,VideoComponent]
})
export class SharingModule { }
