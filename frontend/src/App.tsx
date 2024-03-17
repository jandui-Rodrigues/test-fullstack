import { Outlet } from "react-router";
import { User } from "lucide-react";
function App() {
  return (
    <>
      <header className="bg-[#333333] flex justify-center">
        <img src="../img/logo.png" className="w-[80px]" alt="logo uol" />
      </header>
      <div className="flex flex-col justify-center  mr-auto ml-auto mt-20 w-4/5">
        <div className="flex items-center  gap-5">
          <User size={40} />
          <h1 className="text-3xl text-gray-800">Painel de Clientes</h1>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
