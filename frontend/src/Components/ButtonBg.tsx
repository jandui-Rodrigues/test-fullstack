import { MouseEventHandler } from "react";

interface PropType {
  handle: MouseEventHandler<HTMLButtonElement>;
  nameButton?: string;
  className?: string;
}

function ButtonBg(prop: PropType) {
  const { className } = prop;
  return (
    <div>
      <button
        className={`${className} py-2 px-4 rounded-lg w-[10rem] `}
        onClick={prop.handle}>
        {prop.nameButton}
      </button>
    </div>
  );
}

export default ButtonBg;
