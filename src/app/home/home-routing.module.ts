import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainBodyModule } from './main-body/main-body.module';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', loadChildren: () => MainBodyModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
