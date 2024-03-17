export type States = 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando Ativação'


export interface Client  {
  id: number;
  name: string;
  email: string;
  CPF: string;
  phone: string;
  status: States;
}
