import { Application } from "express";
import { BaseRouter } from "./base.router";
import AuthController from "./auth.controller";

export class AuthRouter extends BaseRouter {
  constructor(app: Application, suffix: string) {
    super(app, suffix);
  }
  configureRouts(): Application {
    this.app.post("/signup", AuthController.signup);
    return this.app;
  }
}
