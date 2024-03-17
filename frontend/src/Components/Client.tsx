import { useNavigate } from "react-router";
import type { Client } from "../interface/Clients";
import ButtonBg from "./ButtonBg";

interface PropType {
  client: Client;
}

const statusColor = {
  Ativo: "bg-green-700",
  Inativo: "bg-red-700",
  Desativado: "bg-gray-400",
  "Aguardando Ativação": "bg-yellow-500",
};

function Client(props: PropType) {
  const nav = useNavigate();

  const handleEdit = () => {
    nav(`/edit/${props.client.id}`);
  };

  return (
    <div className="flex w-full justify-between items-center mt-6 border border-gray-200 py-3 px-5">
      <div className="flex-1">
        <p className="text-gray-600 text-[1.2rem]">{props.client.name}</p>
        <p className="text-gray-500">{props.client.email}</p>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-[1.2rem]">{props.client.CPF}</p>
        <p className="text-gray-500">{props.client.phone}</p>
      </div>
      <div className="flex flex-1 gap-2">
        <div
          className={` text-center py-1 rounded-[50%] w-5 h-5 ${
            statusColor[props.client.status]
          }`}></div>
        <p className="text-gray-500">{props.client.status}</p>
      </div>
      <ButtonBg
        className="text-[#E19A37] border-[1px] border-[#E19A37] hover:bg-[#E19A37] hover:text-yellow-50 ease-in-out transition-all duration-300"
        nameButton="Editar"
        handle={handleEdit}
      />
    </div>
  );
}

export default Client;
