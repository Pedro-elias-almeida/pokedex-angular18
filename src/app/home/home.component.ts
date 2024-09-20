import { Component } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pokeRes: any = '';
  pokemonsInPokedex: any = '';
  selectedRegion: any = '';
  selectedPokemon: any = '';
  constructor(private pokedexService: PokedexService) {}
  pokedex() {
    this.pokedexService
      .pokedex()
      .subscribe((res: any) => (this.pokeRes = res.results));
  }
  onClick(pokedex: any) {
    this.selectedRegion = pokedex.name;
    this.fetchPokemons(pokedex.url);
  }
  fetchPokemons(url: any) {
    this.pokedexService
      .fetchPokemons(url)
      .subscribe((res: any) => (this.pokemonsInPokedex = res.pokemon_entries));
  }
  onPokemonSelected(pokemon: any) {
    console.log(pokemon)
    this.getPokemon(pokemon.pokemon_species.name);
  }

  getPokemon(name: string) {
    this.pokedexService
      .getPokemon(name)
      .subscribe((res: any) => (this.selectedPokemon = res));
  }
  ngOnInit(): void {
    this.pokedex();
  }
}
