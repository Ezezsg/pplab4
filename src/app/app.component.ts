import { Component } from '@angular/core';
import { UserService } from './servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pplab4';
  constructor(public user : UserService, public router : Router)
  {}

  salir(){
    this.user.deslogearse();
  }

}
