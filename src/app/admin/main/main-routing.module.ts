import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachPhimModule } from '../danh-sach-phim/danh-sach-phim.module';
import { MainComponent } from './main.component';
import { ThemPhimModule } from '../them-phim/them-phim.module';
import { CapNhatPhimModule } from '../cap-nhat-phim/cap-nhat-phim.module';
import { DanhSachNguoiDungModule } from '../danh-sach-nguoi-dung/danh-sach-nguoi-dung.module';
import { ThemNguoiDungModule } from '../them-nguoi-dung/them-nguoi-dung.module';
import { CapNhatNguoiDungModule } from '../cap-nhat-nguoi-dung/cap-nhat-nguoi-dung.module';

const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: 'danh-sach-phim', loadChildren: () => DanhSachPhimModule },
            { path: 'them-phim', loadChildren: () => ThemPhimModule },
            { path: 'cap-nhat-phim/:id', loadChildren: () => CapNhatPhimModule },
            { path: 'danh-sach-nguoi-dung', loadChildren: () => DanhSachNguoiDungModule },
            { path: 'them-nguoi-dung', loadChildren: () => ThemNguoiDungModule },
            { path: 'cap-nhat-nguoi-dung/:id', loadChildren: () => CapNhatNguoiDungModule }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }