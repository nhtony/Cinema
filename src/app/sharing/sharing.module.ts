import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/_core/sharedata/material.modules';
import { BreadCrumbComponent } from '../common/bread-crumb/bread-crumb.component';
import { CardComponent } from '../common/card/card.component';
import { TableComponent } from '../common/table/table.component';
import { ModalComponent } from '../common/modal/modal.component';


@NgModule({
  imports: [CommonModule,FormsModule, RouterModule, MaterialModule],
  declarations: [BreadCrumbComponent, CardComponent,TableComponent,ModalComponent],
  exports: [
     BreadCrumbComponent, CardComponent, TableComponent,ModalComponent,CommonModule, FormsModule]
})
export class SharingModule { }
