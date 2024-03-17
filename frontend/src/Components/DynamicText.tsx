interface PropType {
  titlePage: string,
  decription: string
}

function DynamicText(prop : PropType) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-gray-600 text-[1.25rem]">{prop.titlePage}</h2>
      <h3 className="text-gray-500 text-[1.1rem]">
        {prop.decription}
      </h3>
    </div>
  );
}

export default DynamicText;
