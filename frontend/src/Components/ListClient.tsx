import { useNavigate } from "react-router";
import ButtonBg from "./ButtonBg";
import DynamicText from "./DynamicText";
import Client from "./Client";
import { useEffect, useState } from "react";
import api from "../service/requests";

function ListClient() {
  const nav = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestClients = await api.get("/clients");
      setClients(requestClients.data);
    };

    fetchData();
  }, []);

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
      <div className="flex flex-col w-[100%]">
        {clients.map((client) => {
          return (
            <Client
              key={client.id}
              client={{
                ...client,
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
