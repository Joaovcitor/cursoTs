export function add(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(add(5, 5));
console.log(add("oi", 1));

type Pessoa = { tipo: "pessoa"; nome: string };
type Animal = { tipo: "Animal"; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
  tipo: "pessoa" = "pessoa";
}

function mostraNome(obj: PessoaOuAnimal) {
  // if (obj instanceof Aluno) return console.log(obj.nome);
  // if ("nome" in obj) return console.log(obj.nome);
  switch (obj.tipo) {
    case "pessoa":
      console.log(obj.nome);
      return;
    case "Animal":
      console.log("isso é um animal", obj.cor);
  }
}

mostraNome(new Aluno("João"));
mostraNome({ tipo: "Animal", cor: "Rosa" });
