import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Pizza } from 'src/app/clases/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzas: any[] = [];

  referenciaAlaColeccion: AngularFirestoreCollection<Pizza>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection("pizzas");

    this.referenciaAlaColeccion.valueChanges().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.pizzas.push(element);
      });
    });
  }


  public CrearPizza(pizza: Pizza): any {
    return this.referenciaAlaColeccion.add({ ...pizza });
  }

  public traerPizzas() {
    return this.referenciaAlaColeccion;
  }

 

  public actualizarPizza(id:string,data:any) : any
  {
     return this.referenciaAlaColeccion.doc(id).set(data);
  }

   public eliminarPizza(id:string) : any
   {
      return this.referenciaAlaColeccion.doc(id).delete();
   }


  public getAll() {
    return this.pizzas;
  }
}
