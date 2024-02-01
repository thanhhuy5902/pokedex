import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PokeserviceService {
  constructor(private httpClient: HttpClient) {}
  getPokemon(id: String) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/generation/${id}`);
  }

  getPokemonDetail(name: String) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
