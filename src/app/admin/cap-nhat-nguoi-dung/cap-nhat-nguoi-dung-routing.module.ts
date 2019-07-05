import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapNhatNguoiDungComponent } from './cap-nhat-nguoi-dung.component';

const routes: Routes = [
    { path: '', component: CapNhatNguoiDungComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CapNhatNguoiDungRoutingModule { }