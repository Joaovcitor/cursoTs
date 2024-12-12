type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal1 = {
  cor: "Rosa",
  vacinas: ["Vacina 1", "vacina 2"],
  idade: 10,
};

const vacinas = obterChave(animal1, "vacinas");
const cor = obterChave(animal1, "cor");

console.log(vacinas, cor, obterChave(animal1, "idade"));
