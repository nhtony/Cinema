import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachPhimModule } from '../danh-sach-phim/danh-sach-phim.module';
import { MainComponent } from './main.component';
import { ThemPhimModule } from '../them-phim/them-phim.module';
const routes: Routes = [
    { path: '', component: MainComponent, children: [
        {path: 'danh-sach-phim', loadChildren:()=> DanhSachPhimModule},
        {path: 'them-phim', loadChildren:()=> ThemPhimModule}
    ] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }