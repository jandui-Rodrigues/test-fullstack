import { useNavigate } from "react-router";

export default function Home() {
  const nav = useNavigate();
  const handle = () => nav("/create");
  return (
    <div>
      <button onClick={handle}> Novo Cliente</button>
    </div>
  );
}
