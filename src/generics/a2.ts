type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumeros);

async function promisseAync() {
  return 1;
}

function minhaPromisse(): Promise<MeuTipo> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(1);
    }, 1000),
  );
}

promisseAync().then((resultado) => console.log(resultado + 1));
minhaPromisse().then((resultado) => console.log(resultado + 1));
