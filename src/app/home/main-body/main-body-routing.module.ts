import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './main-body.component';
import { PhimModule } from '../phim/phim.module';


const routes: Routes = [
    { path: '', component: MainBodyComponent},
    { path: 'phim/:id', loadChildren: () => PhimModule },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainBodyRoutingModule { }