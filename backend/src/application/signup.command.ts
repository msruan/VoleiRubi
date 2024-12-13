import { User } from "../domain/entities/user.entity";
import {
  IUserRepo,
  UserCreateParams,
} from "../domain/repositories/user.repository";
import { IHashProvider } from "./hash.provider";

interface SignUpRequest extends UserCreateParams {}

export class SignUpCommand {
  private userRepo: IUserRepo;
  private hashProvider: IHashProvider;

  constructor(userRepo: IUserRepo, hashProvider: IHashProvider) {
    this.userRepo = userRepo;
    this.hashProvider = hashProvider;
  }

  async execute(payload: SignUpRequest): Promise<User> {
    payload.password = this.hashProvider.hash(payload.password);
    const newUser: User = await this.userRepo.create(payload);
    return newUser;
  }
}
