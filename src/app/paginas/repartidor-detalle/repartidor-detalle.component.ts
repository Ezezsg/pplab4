import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  repartidor : any = "";
  constructor() { }

  ngOnInit(): void {
  }

  recibirRepartidor($event : Repartidor)
  {
    this.repartidor = $event;
  }

  limpiar()
  {
    this.repartidor = "";
  }

}
