import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PhimModule } from './phim/phim.module';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'phim', loadChildren: () => PhimModule },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
