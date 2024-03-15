import mapStatusHTTP from "../utils/mapStatusHTTP";
import ClientService from "../Service/Client.service";
import { Request, Response } from 'express';

const service = new ClientService();

export default class ClientController {

  async getAll(req: Request, res: Response) {
    try {
      const { status, data } = await service.getAll();
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }

    async getById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { status, data } = await service.getById(id);
        res.status(mapStatusHTTP(status)).json(data);
    }

    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const data = req.body;
        const { status, data: client } = await service.update(id, data);
        res.status(mapStatusHTTP(status)).json(client);
    }

    async create(req: Request, res: Response) {
        const data = req.body;
        const { status, data: client } = await service.create(data);
        res.status(mapStatusHTTP(status)).json(client);
    }
}
