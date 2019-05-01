import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../common/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavBarComponent],
  exports: [
    CommonModule, FormsModule, NavBarComponent]
})
export class SharingModule { }
