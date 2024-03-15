import { NewEntity } from "../Interfaces";
import IClient, {
  IClientCreation,
  IClientUpdate,
} from "../Interfaces/Clients/IClient";
import SequelizeClient from "../database/models/Client.Sequelize";
import { ModelClient } from "../Interfaces/Clients/ClientModel";

export default class ClientAdpSequelize implements ModelClient {
  private model = SequelizeClient;

  async findAll(): Promise<IClient[]> {
    const clients = await this.model.findAll();
    return clients;
  }
  async findById(id: number): Promise<IClient | null> {
    const client = await this.model.findByPk(id);
    return client;
  }

  async update(id: number, data: IClientUpdate): Promise<IClient | null> {
    const [affectedRows] = await this.model.update(data, {
      where: {
        id,
      },
    });

    if (affectedRows === 0) return null;
    return this.findById(id);
  }
  async create(data: NewEntity<IClientCreation>): Promise<IClient> {
    const client = await this.model.create(data);
    return client;
  }
}
