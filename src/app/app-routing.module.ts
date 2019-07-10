import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminGuard } from 'src/_core/guards/auth-guard.service';
import { AdminLoginModule } from './admin/admin-login/admin-login.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate:[AdminGuard]},
  { path: 'admin-login', loadChildren: () => AdminLoginModule},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
