import { User } from "../entities/user.entity";

export interface UserCreateParams {
  name: string;
  email: string;
  avatar: string | null;
  password: string;
}

export interface IUserRepo {
  create(payload: UserCreateParams): Promise<User>;
}
