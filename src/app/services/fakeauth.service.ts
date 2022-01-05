import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected! : boolean

  connectedSub : Subject<boolean> = new Subject<boolean>()

  bsub : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  maListe : string[] = ["toto", "tata", "tutu"]

  emitSub() {
    this.connectedSub.next(this.isConnected)
  }

  constructor() { }

  login() : void {
    this.isConnected = true
    this.emitSub()
  }

  logout() : void  {
    this.isConnected = false
    this.emitSub()
  }
}
