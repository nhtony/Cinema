import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../common/menu/menu.component';
import { NavBarComponent } from '../common/nav-bar/nav-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MenuComponent, NavBarComponent],
  exports: [
    CommonModule, FormsModule, MenuComponent, NavBarComponent]
})
export class SharingModule { }
