import { Component, OnInit } from '@angular/core';
import { FakeauthService } from './services/fakeauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isConnected! : boolean

  constructor(private _auth : FakeauthService){}

  ngOnInit(): void {
    this._auth.connectedSub.subscribe(() => this.isConnected = this._auth.isConnected)
  }
  title = 'ThierryDemo';
}
