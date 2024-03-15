import { NewEntity } from '../index';
import IClient, { IClientCreation, IClientUpdate } from './IClient';

export type ModelClient = {
  findAll(): Promise<IClient[]>;
  findById(id: number): Promise<IClient | null>;
  update(id: number, data: IClientUpdate): Promise<IClient | null>;
  create(data: NewEntity<IClientCreation>): Promise<IClient>;
};
