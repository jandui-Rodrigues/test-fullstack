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
            className={`${
            type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white text-center p-2`}
        >
            {message}
        </div>
    )
  );
}
