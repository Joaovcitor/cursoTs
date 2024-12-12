interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo2<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: "João",
  sobrenome: "Vcitor",
  idade: 23,
};
const aluno2: PessoaProtocolo2<string, number> = {
  nome: "João",
  sobrenome: "Vcitor",
  idade: 23,
};

console.log(aluno1, aluno2);
