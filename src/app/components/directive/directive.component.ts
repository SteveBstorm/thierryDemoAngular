import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  isVisible : boolean = false;

  myUser? : User = {login : "toto", pwd : "truc"}

  liste : string[] = ["pomme", "poire", "scoubidou"];

  myProp : string = "0"

  constructor() { }

  ngOnInit(): void {
  }

  toggle() : void {
    this.isVisible = !this.isVisible;
  }

}
