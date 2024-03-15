import ClientAdpSequelize from "../Models/ClientAdpSequelize.module";
import IClient, { IClientUpdate } from "../Interfaces/Clients/IClient";
import { ModelClient } from "../Interfaces/Clients/ClientModel";
import { ServiceResponse } from "../Interfaces/ServiceResponse";

export default class ClientService {
  constructor(
    private clientModel: ModelClient = new ClientAdpSequelize()
  ) {
  }

  public async getAll(): Promise<ServiceResponse<IClient[]>> {
    const clients = {} as ServiceResponse<IClient[]>;
    try {
      const clientsData = await this.clientModel.findAll();
      clients.status = "SUCCESSFUL";
      clients.data = clientsData;
      return clients;
    } catch (error) {
      if (error instanceof Error) {
        return {
          status: "BAD_REQUEST",
          data: { message: error.message },
        };
      }
    }
    return clients;
  }

  public async getById(id: number): Promise<ServiceResponse<IClient | null>> {
    const client = {} as ServiceResponse<IClient | null>;
    client.status = "NOT_FOUND";
    client.data = null;

    try {
      const clientData = await this.clientModel.findById(id);
      if (clientData) {
        client.status = "SUCCESSFUL";
        client.data = clientData;
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          status: "BAD_REQUEST",
          data: { message: error.message },
        };
      }
    } finally {
      return client;
    }
  }

  public async update(
    id: number,
    data: IClientUpdate,
  ): Promise<ServiceResponse<IClient | null>> {
    const clientUpdate = {} as ServiceResponse<IClient | null>;

    try {
      const client = await this.clientModel.update(id, data);
      clientUpdate.status = "SUCCESSFUL";
      clientUpdate.data = client;
      return clientUpdate;
    } catch (error) {
      if (error instanceof Error) {
        return {
          status: "BAD_REQUEST",
          data: { message: error.message },
        };
      }
    }
    return clientUpdate;
  }

  public async create(data: IClient): Promise<ServiceResponse<IClient>> {
    const newClient = {} as ServiceResponse<IClient>;
    try {
      const client = await this.clientModel.create(data);
      newClient.status = "CONFLICT";
      newClient.data = client;
      return newClient;
    } catch (error) {
      if (error instanceof Error) {
        return {
          status: "BAD_REQUEST",
          data: { message: error.message },
        };
      }
    }
    return newClient;
  }
}
