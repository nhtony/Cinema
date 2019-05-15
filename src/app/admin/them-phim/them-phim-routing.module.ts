import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemPhimComponent } from './them-phim.component';
const routes: Routes = [
    { path: '', component: ThemPhimComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemPhimRoutingModule { }