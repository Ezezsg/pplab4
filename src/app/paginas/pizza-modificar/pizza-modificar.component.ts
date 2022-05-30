import { Component, OnInit, Input  } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pizza-modificar',
  templateUrl: './pizza-modificar.component.html',
  styleUrls: ['./pizza-modificar.component.css']
})
export class PizzaModificarComponent implements OnInit {



  @Input() pizzaModif: Pizza = new Pizza;

  constructor(private ps : PizzaService ) { 
    
  }

  ngOnInit(): void {
    
    
  }

  modificarPizza(){

    this.ps.traerPizzas().snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any =>{
        let pizza = response.payload.doc.data();
        let id = response.payload.doc.id;

        if(pizza.nombre == this.pizzaModif.nombre)
        {
          
          this.ps.actualizarPizza(id,JSON.parse(JSON.stringify(this.pizzaModif)));
          this.pizzaModif.nombre = null;
          this.pizzaModif.ingredientes = null;
          this.pizzaModif.precio = null;
          this.pizzaModif.peso = null;
          
        }
        
      })
    })
    
  }

}
