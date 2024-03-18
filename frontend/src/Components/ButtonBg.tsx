import { MouseEventHandler } from "react";

interface PropType {
  handle: MouseEventHandler<HTMLButtonElement>;
  nameButton?: string;
  className?: string;
  type?: "button";
}

function ButtonBg(prop: PropType) {
  const { className } = prop;
  return (
    <div>
      <button
        type={prop.type}
        className={`${className} py-2 px-4 rounded-lg w-[8.5rem] `}
        onClick={prop.handle}>
        {prop.nameButton}
      </button>
    </div>
  );
}

export default ButtonBg;
