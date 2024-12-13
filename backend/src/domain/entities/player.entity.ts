import { User } from "./user.entity";

export class Player {
  private id: string | number;
  private user: User;
  private sexo: string;
  private idade: number;
  private nivel_habilidade: string;

  constructor(
    id: string | number,
    user: User,
    sexo: string,
    idade: number,
    nivel_habilidade: string
  ) {
    this.id = id;
    this.user = user;
    this.sexo = sexo;
    this.idade = idade;
    this.nivel_habilidade = nivel_habilidade;
  }
}
