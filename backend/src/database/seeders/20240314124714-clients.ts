import { QueryInterface } from "sequelize";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert("clients", [
      {
        name: "John Doe",
        email: "JohnDDD@gmail.com",
        phone: "(11) 99999-9999",
        CPF: "123.456.789-00",
        status: "Active",
      },
      {
        name: "Ana Silva",
        email: "ana.silva@email.com",
        phone: "(12) 91234-5678",
        CPF: "123.456.789-01",
        status: "Ativo",
      },
      {
        name: "Bruno Souza",
        email: "bruno.souza@email.com",
        phone: "(13) 92345-6789",
        CPF: "234.567.890-12",
        status: "Inativo",
      },
      {
        name: "Camila Oliveira",
        email: "camila.oliveira@email.com",
        phone: "(14) 93456-7890",
        CPF: "345.678.901-23",
        status: "Desativado",
      },
      {
        name: "Daniel Santos",
        email: "daniel.santos@email.com",
        phone: "(15) 45677-8901",
        CPF: "456.789.012-34",
        status: "Aguardando Ativação",
      },
      {
        name: "Eduardo Pereira",
        email: "eduardo.pereira@email.com",
        phone: "(16) 54678-9012",
        CPF: "567.890.123-45",
        status: "Ativo",
      },
      {
        name: "Fernanda Costa",
        email: "fernanda.costa@email.com",
        phone: "(17) 67839-0123",
        CPF: "678.901.234-56",
        status: "Inativo",
      },
      {
        name: "Gabriel Andrade",
        email: "gabriel.andrade@email.com",
        phone: "(18) 78990-1234",
        CPF: "789.012.345-67",
        status: "Desativado",
      },
      {
        name: "Gabriela Dias",
        email: "gabriela.dias@email.com",
        phone: "(19) 89901-2345",
        CPF: "890.123.456-78",
        status: "Aguardando Ativação",
      },
      {
        name: "Henrique Martins",
        email: "henrique.martins@email.com",
        phone: "(20) 89012-3456",
        CPF: "901.234.567-89",
        status: "Ativo",
      },
    ]);
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete("clients", {});
  },
};
