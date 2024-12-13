import { Request, Response } from "express";
import { SignUpCommand } from "../application/signup.command";

class AuthController {
  constructor(private signupCommand: SignUpCommand) {}

  async signup(request: Request, response: Response) {
    const { name, email, avatar, password } = request.body;
    const newUser = await this.signupCommand.execute({
      name,
      email,
      avatar,
      password,
    });
    response.status(201).json(newUser);
  }
}

export default new AuthController({} as SignUpCommand); //Todo: really pass this param
