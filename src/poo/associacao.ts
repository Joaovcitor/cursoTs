export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log("Não posso escrever sem ferramenta");
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor("João");
const caneta = new Caneta("bic");
const maquina = new MaquinaDeEscrever("Maquina");

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquina;
escritor.ferramenta = null;
escritor.escrever();
