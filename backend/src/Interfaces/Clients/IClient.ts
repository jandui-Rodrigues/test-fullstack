type IClient = {
  id: number;
  name: string;
  email: string;
  phone: string;
  CPF: string;
  status: string;
};

type IClientCreation = {
  name: string;
  email: string;
  phone: string;
  CPF: string;
  status: string;
};

type IClientUpdate = {
  name?: string;
  email?: string;
  phone?: string;
  CPF?: string;
  status?: string;
};

export default IClient;
export { IClientCreation, IClientUpdate };
