import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './main-body.component';
import { PhimModule } from '../phim/phim.module';
import { PhongVeModule } from '../phim/phong-ve/phong-ve.module';
import { AuthGuard } from 'src/_core/guards/auth-guard.service';

const routes: Routes = [
    { path: '', component: MainBodyComponent},
    { path: 'phim/:id', loadChildren: () => PhimModule },
    { path: 'phong-ve/:id', loadChildren: ()=> PhongVeModule,canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainBodyRoutingModule { }