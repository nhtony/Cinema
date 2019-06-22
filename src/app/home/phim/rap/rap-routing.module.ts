import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RapComponent } from './rap.component';


const routes: Routes = [
    {
      path:'',component: RapComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RapRoutingModule { }