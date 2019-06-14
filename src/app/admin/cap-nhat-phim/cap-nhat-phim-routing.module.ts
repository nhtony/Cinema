import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapNhatPhimComponent } from './cap-nhat-phim.component';
const routes: Routes = [
    { path: '', component: CapNhatPhimComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CapNhatPhimRoutingModule { }