interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nome: "João",
  sobrenome: "victor",
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

const pessoa = new Pessoa("joão", "victor");
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
