import { Component, OnInit } from '@angular/core';
import { Pokedex, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokedex! : Pokedex 

  constructor(
    private _poke : PokemonService
  ) { }

  ngOnInit(): void {
    this._poke.getPokedex().subscribe(
      (pokedex : Pokedex) => this.pokedex = pokedex,
      (error) => console.log(error)
      
      )
  }

  connect() {
    this._poke.login()
  }
}
