import { useNavigate } from "react-router";
import ButtonBg from "./ButtonBg";
import DynamicText from "./DynamicText";
import Client from "./Client";
import { States } from "../interface/Clients";

const clients = [
  {
    name: "John Doe",
    email: "JohnDDD@gmail.com",
    phone: "(11) 99999-9999",
    CPF: "12345678900",
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
];
function ListClient() {
  const nav = useNavigate();

  const handle = () => nav("/create");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <DynamicText
          titlePage="Listagem de usuários"
          decription="Escolha o cliente para visualizar os detalhes"
        />
        <ButtonBg
          handle={handle}
          className="text-yellow-50 bg-[#E19A37]"
          nameButton="Novo Cliente"
        />
      </div>
      <div className="flex flex-col gap-2 w-[100%]">
        {clients.map((client, index) => {
          return (
            <Client
              key={index}
              client={{
                id: index,
                ...client,
                status: client.status as States,
              }}
            />
          );
        })}
      </div>
      <p className="text-gray-500 text-[1.1rem] mt-7">
        Exibindo {clients.length} clientes
      </p>
    </div>
  );
}

export default ListClient;
