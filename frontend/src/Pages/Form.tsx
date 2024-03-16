import { useNavigate, useParams } from "react-router";

function Form() {
  const { id } = useParams();
  const nav = useNavigate();

  const handle = () => {
    return nav("/");
  };
  
  return (
    <div>
      <h1>Formulario Dinamico</h1>

      <button>{!id ? "Criar" : "Editar"}</button>
      <button onClick={handle}>Voltar</button>
    </div>
  );
}

export default Form;
