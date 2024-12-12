interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}
const pessoa: Pessoa = {
  nome: "João",
  sobrenome: "victor",
  enderecos: ["Av Brasil"],
};
pessoa.enderecos.push("Rua nova");
console.log(pessoa);
