import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public https : HttpClient,private firebase : AngularFirestore) { }

  traerDatosGitHub()
  {
    return this.https.get("https://api.github.com/users/Ezezsg");
  }

  traerPaises()
  {
    return this.https.get('https://restcountries.com/v2/alpha?codes=ng,za,esp,fr');
  }
}
