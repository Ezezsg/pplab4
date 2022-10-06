import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-pizza-abm',
  templateUrl: './pizza-abm.component.html',
  styleUrls: ['./pizza-abm.component.css']
})
export class PizzaABMComponent implements OnInit {

  pizza$ : Observable<Pizza[]>;
  pizza: Pizza = new Pizza();

  constructor(private ps : PizzaService ) {
    this.pizza$ = this.ps.traerPizzas().valueChanges();
  }

  ngOnInit(): void {
  }

  agregarPizza(pizza: Pizza){
    this.ps.CrearPizza(pizza);
  }

  selectPizza(pizza: Pizza)
  {
    this.pizza.nombre = pizza.nombre;
    this.pizza.ingredientes = pizza.ingredientes;
    this.pizza.precio = pizza.precio;
    this.pizza.peso = pizza.peso;
  }

}
