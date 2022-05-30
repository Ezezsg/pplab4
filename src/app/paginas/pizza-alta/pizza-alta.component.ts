import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pizza-alta',
  templateUrl: './pizza-alta.component.html',
  styleUrls: ['./pizza-alta.component.css']
})
export class PizzaAltaComponent implements OnInit {

  @Output() nuevaPizza = new EventEmitter<Pizza>();
  public grupoControles: FormGroup;
  

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre' : ['',Validators.required],
      'ingredientes' : ['',Validators.required],
      'precio' : ['',[Validators.required,Validators.min(1)]],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
    });
  }

  cargarPizza(){
    let pizza: Pizza = new Pizza();

    pizza.nombre = this.grupoControles.get("nombre")?.value,
    pizza.ingredientes = this.grupoControles.get("ingredientes")?.value,
    pizza.precio = this.grupoControles.get("precio")?.value,
    pizza.peso = this.grupoControles.get("peso")?.value,
    this.grupoControles.reset();
    
    this.nuevaPizza.emit(pizza);
  }


}
