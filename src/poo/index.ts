export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  public getNome(): string {
    return this.nome;
  }
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "11111111");
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobreNome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador("João", "Lima");
const colaborador2 = new Colaborador("Miranda", "Alves");
const colaborador3 = new Colaborador("Marta", "Lima");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.popColaborador();
console.log(empresa1.getNome());
empresa1.mostrarColaboradores();
