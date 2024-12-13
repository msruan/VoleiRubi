import { Application } from "express";

export abstract class BaseRouter {
  protected app: Application;
  protected suffix: string;

  constructor(app: Application, suffix: string) {
    this.app = app;
    this.suffix = suffix;
  }

  abstract configureRouts(): Application;
}
