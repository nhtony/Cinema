import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/_core/sharedata/material.modules';

import {NavBarComponent} from '../common/nav-bar/nav-bar.component';

import { ModalComponent } from '../common/modal/modal.component';

import { NgxSpinnerModule } from 'ngx-spinner';

import { TimeTableComponent } from '../home/phim/time-table/time-table.component';
import { FormLoginComponent } from '../common/form-login/form-login.component';
import { FormSignUpComponent } from '../common/form-sign-up/form-sign-up.component';



@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule, ReactiveFormsModule,NgxSpinnerModule],

  declarations: [NavBarComponent,ModalComponent,TimeTableComponent,FormLoginComponent,FormSignUpComponent],

  exports: [CommonModule, FormsModule, ReactiveFormsModule,NavBarComponent,ModalComponent,TimeTableComponent,FormLoginComponent,FormSignUpComponent]
  
})
export class SharingModule { }
