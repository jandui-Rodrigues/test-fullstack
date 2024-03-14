import { QueryInterface } from "sequelize";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert("clients", [
      {
        name: "John Doe",
        email: "JohnDDD@gmail.com",
        phone: "(11) 99999-9999",
        CPF: "12345678900",
        status: "active",
      },
      {
        name: "Ana Silva",
        email: "ana.silva@email.com",
        phone: "(12) 1234-5678",
        CPF: "12345678901",
        status: "Ativo",
      },
      {
        name: "Bruno Souza",
        email: "bruno.souza@email.com",
        phone: "(13) 2345-6789",
        CPF: "23456789012",
        status: "Inativo",
      },
      {
        name: "Camila Oliveira",
        email: "camila.oliveira@email.com",
        phone: "(14) 3456-7890",
        CPF: "34567890123",
        status: "Desativado",
      },
      {
        name: "Daniel Santos",
        email: "daniel.santos@email.com",
        phone: "(15) 4567-8901",
        CPF: "45678901234",
        status: "Aguardando Ativação",
      },
      {
        name: "Eduardo Pereira",
        email: "eduardo.pereira@email.com",
        phone: "(16) 5678-9012",
        CPF: "56789012345",
        status: "Ativo",
      },
      {
        name: "Fernanda Costa",
        email: "fernanda.costa@email.com",
        phone: "(17) 6789-0123",
        CPF: "67890123456",
        status: "Inativo",
      },
      {
        name: "Gabriel Andrade",
        email: "gabriel.andrade@email.com",
        phone: "(18) 7890-1234",
        CPF: "78901234567",
        status: "Desativado",
      },
      {
        name: "Gabriela Dias",
        email: "gabriela.dias@email.com",
        phone: "(19) 8901-2345",
        CPF: "89012345678",
        status: "Aguardando Ativação",
      },
      {
        name: "Henrique Martins",
        email: "henrique.martins@email.com",
        phone: "(20) 9012-3456",
        CPF: "90123456789",
        status: "Ativo",
      },
    ]);
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete("clients", {});
  },
};
