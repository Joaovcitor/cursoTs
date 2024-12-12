export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "000.000.000-00";
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa2 = Pessoa.criaPessoa("Maria", "Miranda");
console.log(pessoa2);
