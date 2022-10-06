import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { take } from 'rxjs/operators';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-pizza-borrar',
  templateUrl: './pizza-borrar.component.html',
  styleUrls: ['./pizza-borrar.component.css']
})
export class PizzaBorrarComponent implements OnInit {

  @Input() pizzaBorrar: Pizza = new Pizza;

  constructor(private ps : PizzaService) { }

  ngOnInit(): void {
  }

  borrarPizza(){
    this.ps.traerPizzas().snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any =>{
        let pizza = response.payload.doc.data();
        let id = response.payload.doc.id;

          if(pizza.nombre == this.pizzaBorrar.nombre)
          {
            this.ps.eliminarPizza(id);
            this.pizzaBorrar.nombre = null;
            this.pizzaBorrar.ingredientes = null;
            this.pizzaBorrar.precio = null;
            this.pizzaBorrar.peso = null;
          }

      })
    })
  }

}
