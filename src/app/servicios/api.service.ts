import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public https : HttpClient,private firebase : AngularFireStorageModule) { }

  traerDatosGitHub()
  {
    return this.https.get("https://api.github.com/users/Ezezsg");
  }

  traerPaises()
  {
    return this.https.get('https://restcountries.com/v2/alpha?codes=ng,za,esp,fr');
  }
}
