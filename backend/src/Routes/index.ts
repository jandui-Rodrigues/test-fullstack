import { Router } from "express";
import ClientRoutes from "./Client.routes";

const router = Router();
const clientRoutes = new ClientRoutes();

router.use("/clients", clientRoutes.buildRoutes());

export default router;