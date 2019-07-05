import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemNguoiDungComponent } from './them-nguoi-dung.component';

const routes: Routes = [
   {path:'',component: ThemNguoiDungComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemNguoiDungRoutingModule { }