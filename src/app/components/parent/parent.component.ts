import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  myUser : User = {login : "steve", pwd : "toto"}

  currentUser! : User

  constructor() { }

  ngOnInit(): void {
  }

  onClick() : void {
    this.currentUser = this.myUser
  }

  maMethodeReponse(texte : string) : void {
    alert(texte)
  }

}
