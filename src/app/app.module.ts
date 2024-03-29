import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './paginas/tabla-paises/tabla-paises.component';
import { ErrorComponent } from './paginas/error/error.component';
import { ErrorAdminComponent } from './paginas/error-admin/error-admin.component';
import { ErrorLogeadoComponent } from './paginas/error-logeado/error-logeado.component';
import { RepartidorDetalleComponent } from './paginas/repartidor-detalle/repartidor-detalle.component';
import { ListadoRepartidoresComponent } from './paginas/listado-repartidores/listado-repartidores.component';
import { DetallesRepartidorComponent } from './paginas/detalles-repartidor/detalles-repartidor.component';
import { DetallePaisComponent } from './paginas/detalle-pais/detalle-pais.component';
import { PizzaABMComponent } from './paginas/pizza-abm/pizza-abm.component';
import { PizzaAltaComponent } from './paginas/pizza-alta/pizza-alta.component';
import { PizzaBorrarComponent } from './paginas/pizza-borrar/pizza-borrar.component';
import { PizzaModificarComponent } from './paginas/pizza-modificar/pizza-modificar.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    ErrorComponent,
    ErrorAdminComponent,
    ErrorLogeadoComponent,
    RepartidorDetalleComponent,
    ListadoRepartidoresComponent,
    DetallesRepartidorComponent,
    DetallePaisComponent,
    PizzaABMComponent,
    PizzaAltaComponent,
    PizzaBorrarComponent,
    PizzaModificarComponent,
    PizzaABMComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers:[], 
  bootstrap: [AppComponent]
})
export class AppModule { }
