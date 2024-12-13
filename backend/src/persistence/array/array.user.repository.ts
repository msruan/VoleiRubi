import { User } from "../../domain/entities/user.entity";
import {
  IUserRepo,
  UserCreateParams,
} from "../../domain/repositories/user.repository";

export class ArrayUserRepo implements IUserRepo {
  private repository: User[] = [];

  create(payload: UserCreateParams): Promise<User> {
    const newUser = new User(
      this.repository.length,
      payload.name,
      payload.email,
      payload.avatar,
      payload.password
    );
    this.repository.push(newUser);
    return new Promise((resolve, reject) => resolve(newUser));
  }
}
