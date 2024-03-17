import { useNavigate, useParams } from "react-router";
import DynamicText from "../Components/DynamicText";
import ButtonBg from "../Components/ButtonBg";

function Form() {
  const { id } = useParams();
  const nav = useNavigate();

  const handle = () => {
    return nav("/");
  };

  return (
    <div>
      <DynamicText
        titlePage={!id ? "Novo usuário" : `Editando Cliente`}
        decription={
          !id
            ? "Informe os campos a seguir para criar um novo usuário"
            : "Altere o campos necessarios para Editar"
        }
      />
      <div className="flex gap-4">
        <ButtonBg
          handle={handle}
          className="text-yellow-50 bg-[#E19A37]"
          nameButton={!id ? "Criar" : "Editar"}
        />
        <ButtonBg
          handle={handle}
          className="text-[#E19A37] border-[1px] border-[#E19A37] "
          nameButton="Voltar"
        />
      </div>{" "}
    </div>
  );
}

export default Form;
