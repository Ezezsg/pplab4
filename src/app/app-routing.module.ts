import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { ErrorLogeadoComponent } from './paginas/error-logeado/error-logeado.component';
import { ErrorAdminComponent } from './paginas/error-admin/error-admin.component';
import { ErrorComponent } from './paginas/error/error.component'; 

import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path : 'bienvenido', component: BienvenidaComponent},
  { path : 'login', component: LoginComponent},
  { path: '', pathMatch:'full', redirectTo: 'bienvenido'},
  { path : 'errorLogeo', component: ErrorLogeadoComponent},
  { path : 'errorAdmin', component: ErrorAdminComponent},
  { path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => m.RepartidorModule), canActivate: [UserGuard] },
  { path: 'error' , component: ErrorComponent},
  { path : '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
