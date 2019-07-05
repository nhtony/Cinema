import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung.component';

const routes: Routes = [
   {path:'',component: DanhSachNguoiDungComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DanhSachNguoiDungRoutingModule { }