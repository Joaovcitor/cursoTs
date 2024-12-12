export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

class Guerreira extends Personagem {
  protected emoji = "\u{1F9DD}";
  bordao(): void {
    console.log(this.emoji + "Guerreiraaaaaaaaaaaa ao ataque!");
  }
}
class Monstro extends Personagem {
  protected emoji = "\u{1F9DF}";

  bordao(): void {
    console.log(this.emoji + this.nome + " ao ataque!");
  }
}

const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("fi da simone", 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
