import { CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";

type PropMessage = {
  message: string;
  type: string;
};

export default function Message(prop: PropMessage) {
  const { message, type } = prop;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const magicNumber = 3000;
    if (!message) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, magicNumber);
    return () => clearTimeout(timer);
  }, [message]);
  return (
    visible && (
      <div
        className={`flex items-center px-10 gap-4 shadow-2xl
            absolute top-10 left-100 right-4 z-50 m-auto w-[30rem] h-[10rem] opacity-80 rounded-md
            ${
              type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white p-2`}>
        <CheckCheck size={40} />
        <p className="text-2xl">{message}</p>
      </div>
    )
  );
}
