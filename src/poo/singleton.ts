export class Database {
  private static dataBase: Database;

  private constructor(
    private host: string,
    private username: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.password}, ${this.username}`);
  }

  static getDataBase(
    host: string,
    username: string,
    password: string,
  ): Database {
    if (Database.dataBase) {
      console.log("Retornando instância já criada!");
      return Database.dataBase;
    }
    Database.dataBase = new Database(host, username, password);
    return Database.dataBase;
  }
}

const db1 = Database.getDataBase("localhost", "root", "123456");
db1.connect();

const db2 = Database.getDataBase("localhost", "root", "123456");
db2.connect();

console.log(db1 === db2);
