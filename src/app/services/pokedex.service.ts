import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http:HttpClient) { }
  pokedex(){
    
    return this.http.get("https://pokeapi.co/api/v2/pokedex/")

  }
  fetchPokemons(url: any) {
    return this.http.get(url)
  }
getPokemon(name: string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`)

}
}

