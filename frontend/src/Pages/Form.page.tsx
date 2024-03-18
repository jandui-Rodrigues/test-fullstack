import { useParams } from "react-router";
import DynamicText from "../Components/DynamicText";
import Form from "../Components/Form";

function FormPage() {
  const { id } = useParams();
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
      <div>
        <Form />
      </div>
    </div>
  );
}

export default FormPage;
