import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-repartidor',
  templateUrl: './detalles-repartidor.component.html',
  styleUrls: ['./detalles-repartidor.component.css']
})
export class DetallesRepartidorComponent implements OnInit {

  @Input () repartidor : any = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
