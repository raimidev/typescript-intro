export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export type Pokemon = {
  id: number;
  name: string;
  age?: number;
};

export const pokemon: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
};