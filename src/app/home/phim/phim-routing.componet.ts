import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhimComponent } from './phim.component';

const routes: Routes = [
    { path: '', component: PhimComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhimRoutingModule { }