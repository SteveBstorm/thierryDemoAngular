import { Component, OnInit } from '@angular/core';

import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  myString : string = "salut tout le monde"
  myNumber : number = 42.28
  myDate : Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
