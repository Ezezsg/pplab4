import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {

  logeado : any = false;
  administrador : boolean = false;

  empleado : Usuario = {
    usuario : "empleado",
    clave : "123"
  };
  
  admin : Usuario = {
    usuario : "admin",
    clave : "123"
  };

  constructor() { 
  }

  logearse(usuario : Usuario)
  {
    if(usuario.usuario == this.empleado.usuario && usuario.clave == this.empleado.clave)
    {
        this.logeado = true;
        this.administrador = false;
    }
    else
    {
      if(usuario.usuario == this.admin.usuario && usuario.clave == this.admin.clave)
      {
        this.logeado = true;
        this.administrador = true;
      }
    }
  }
}
