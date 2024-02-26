import axios from 'axios';
import {Move, Pokeapiresponse} from '../types/pokeapi-response.type.ts';

export class Pokemon {
  constructor(public id: number, public name: string) {
  }

  async getMoves(): Promise<Move[]> {
    const {data} = await axios.get<Pokeapiresponse>(`https://pokeapi.co/api/v2/pokemon/4`);

    return data.moves;
  }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.getMoves();