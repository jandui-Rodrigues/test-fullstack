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
    this.router.get("/:id", this.clientController.getById);
    this.router.post("/", this.clientController.create);
    this.router.put("/:id", this.clientController.update);
    return this.router;
  }
}
