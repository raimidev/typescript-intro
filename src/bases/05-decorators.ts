class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
    console.log(`NO Quiero!!!!!!!`);
  }

  speak() {
    console.log(`No Quiero Hablar!`);
  }
}

const MyDecorator = () => {
  return (target: any) => {
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!`);
  }

  speak() {
    console.log(`I'm ${this.name}`);
  }
}

const charmander = new Pokemon(4, "charmander");
charmander.scream();
charmander.speak();

export default charmander;
