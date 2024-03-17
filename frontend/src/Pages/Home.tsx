import { useNavigate } from "react-router";
import ListClient from "../Components/ListClient";
import ButtonBg from "../Components/ButtonBg";

export default function Home() {
  const nav = useNavigate();
  const handle = () => nav("/create");
  return (
    <div className="flex justify-between items-center">
      <ListClient />

      <ButtonBg
        handle={handle}
        className="text-yellow-50 bg-[#E19A37]"
        nameButton="Novo Cliente"
      />
    </div>
  );
}
