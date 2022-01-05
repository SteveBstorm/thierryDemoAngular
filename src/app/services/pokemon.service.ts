import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _url : string = environment.baseurl

  private _urlsteve : string = "http://www.stevebstorm.somee.com/api"

  constructor(private _client : HttpClient) { }

  login() {
    //let headers = new HttpHeaders ({'authorization' : 'bearer ' + localStorage.getItem("token")})
    this._client.post<any>(this._urlsteve+"/auth/auth", {email : "test@test.com", password : "test1234"}/*, {headers : headers}*/).subscribe(
      (user : any)  => {
        localStorage.setItem("token", user.token)
      }
    )
  }

  getPokedex() : Observable<Pokedex> {
    return this._client.get<Pokedex>(this._url)
  }
}

export interface Pokedex {
  count : number,
  next? : string,
  previous? : string,
  results : Pokemon[]
}

export interface Pokemon {
  name : string,
  url : string
}