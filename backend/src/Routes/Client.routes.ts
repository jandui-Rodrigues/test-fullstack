import { Router } from "express";
import ClientController from "../Controllers/Client.controller";

export default class ClientRoutes {
  private router: Router;
  private clientController = new ClientController();

  constructor() {
    this.router = Router();
  }

  buildRoutes() {
    this.router.get("/", this.clientController.getAll);

    return this.router;
  }
}
