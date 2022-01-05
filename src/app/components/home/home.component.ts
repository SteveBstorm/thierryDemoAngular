import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myProp : string = "toto" //public par défaut

  myUser! : User

  isVisible : boolean = false

  isConnected : boolean = false

  maListelocal : string[] = this._auth.maListe

  constructor(private _auth : FakeauthService) {}

  connect() : void {
    this._auth.login()
    
  }

  disconnect() : void {
    this._auth.logout()

  }

  ngOnInit(): void {
    this.myUser = {login : "steve", pwd : "toto"}
    this._auth.connectedSub.subscribe(
      (x : boolean) => {this.isConnected = x},
      (error) =>  {console.log(error)},
      () => {}
      
      )
  }

  onClick() : void {
    this.myProp = "Salut m'sieu T"
    console.log("toto")
  }

  toggle() : void {
    this.isVisible = !this.isVisible
  }

}

