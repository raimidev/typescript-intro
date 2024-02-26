import {Move, Pokeapiresponse} from '../types/pokeapi-response.type.ts';
import {Adapter, FetchPokeApiAdapter, PokeApiAdapter} from '../api/pokeApi.adapter.ts';

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    private readonly http: Adapter = new PokeApiAdapter(),
  ) {
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<Pokeapiresponse>(`https://pokeapi.co/api/v2/pokemon/4`);

    return data.moves;
  }
}

export const charmander = new Pokemon(4, 'Charmander', new FetchPokeApiAdapter());

console.log(await charmander.getMoves());