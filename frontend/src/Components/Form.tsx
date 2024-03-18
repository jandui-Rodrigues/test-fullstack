import { FieldValues, useForm } from "react-hook-form";
import validator from "validator";
import ButtonBg from "./ButtonBg";
import { useNavigate, useParams } from "react-router";
import { cpfMask, phoneMask } from "../helpers/MaksInputs";
import api, { requestCreate, requestData } from "../service/requests";
import { useEffect, useState } from "react";
import Message from "./Message";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const { id } = useParams();
  const nav = useNavigate();

  const cpf = watch("cpf");
  const telefone = watch("telefone");

  const resetMessage = () => {
    setTimeout(() => {
      setMessage({
        text: "",
        type: "",
      });
    }, 3000);
  };

  const onSubmit = async (data: FieldValues) => {
    const client = {
      phone: data.telefone,
      name: data.name,
      CPF: data.cpf,
      email: data.email,
      status: data.status,
    };
    if (id) {
      await api.put(`/clients/${id}`, data);
      setMessage({
        text: "Cliente Atualizado com sucesso",
        type: "success",
      });
      resetMessage();
      return;
    }
    await requestCreate("/clients", client);
    setMessage({
      text: "Cliente Criado Com Sucesso",
      type: "success",
    });
    resetMessage();
  };

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const requestClients = await requestData(`/clients/${id}`);
      console.log(requestClients);
      setValue("name", requestClients.name);
      setValue("email", requestClients.email);
      setValue("cpf", requestClients.CPF);
      setValue("telefone", requestClients.phone);
    };
    fetchData();
  }, [id, setValue]);

  return (
    <form className="flex flex-col gap-4 mt-10">
      {message.text && <Message message={message.text} type={message.type} />}
      <div className="">
        <input
          placeholder="Nome"
          {...register("name", { required: true })}
          className={` w-[17rem] px-4 py-3 bg-slate-50 border rounded-md p-2 focus:outline-none 
          ${errors?.name?.type ? "border-red-500" : "border-gray-400"} `}
        />
        {errors?.name?.type === "required" && (
          <p className="text-red-500">Name is required</p>
        )}
      </div>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className={` w-[17rem] px-4 py-3 bg-slate-50 border rounded-md p-2 focus:outline-none 
          ${errors?.name?.type ? "border-red-500" : "border-gray-400"}`}
          {...register("email", {
            required: true,
            validate: (value) => validator.isEmail(value),
          })}
        />
        {errors?.email?.type === "validate" && (
          <p className="text-red-500">Email is not corret</p>
        )}
        {errors?.email?.type === "required" && (
          <p className="text-red-500">Email is required</p>
        )}
      </div>
      <div>
        <input
          className={` w-[17rem] px-4 py-3 bg-slate-50 border rounded-md p-2 focus:outline-none 
          ${errors?.name?.type ? "border-red-500" : "border-gray-400"}`}
          maxLength={14}
          type="text"
          value={cpfMask(cpf)}
          placeholder="CPF"
          {...register("cpf", {
            required: true,
            pattern: /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/,
          })}
        />
        {errors?.cpf?.type === "required" && (
          <p className="text-red-500">CPF is required</p>
        )}
        {errors?.cpf?.type === "pattern" && (
          <p className="text-red-500">CPF is not Correct</p>
        )}
      </div>
      <div>
        <input
          className={` w-[17rem] px-4 py-3 bg-slate-50 border rounded-md p-2 focus:outline-none 
          ${errors?.name?.type ? "border-red-500" : "border-gray-400"}`}
          maxLength={15}
          type="text"
          value={phoneMask(telefone)}
          placeholder="Telefone"
          {...register("telefone", {
            required: true,
            pattern: /^\(([0-9]{2})\) [0-9]{5}-[0-9]{4}$/,
          })}
        />
        {errors?.telefone?.type === "required" && (
          <p className="text-red-500">Phone is required</p>
        )}
        {errors?.telefone?.type === "pattern" && (
          <p className="text-red-500">Phone is not Correct</p>
        )}
      </div>
      <div>
        <select
          className={` w-[17rem] px-4 py-3 bg-slate-50 border rounded-md p-2 focus:outline-none text-gray-400
          ${errors?.name?.type ? "border-red-500" : "border-gray-400"}`}
          {...register("status", { validate: (value) => value !== "0" })}>
          <option value="0">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Aguardando Ativação">Aguardado Ativação</option>
          <option value="Inativo">Inativo</option>
          <option value="Desativado">Desativado</option>
        </select>

        {errors?.status?.type === "validate" && (
          <p className="text-red-500">Required to select Status`</p>
        )}
      </div>
      <div className={`flex gap-4 mt-10 mb-8`}>
        <ButtonBg
          type="button"
          handle={() => handleSubmit(onSubmit)()}
          className="text-yellow-50 bg-[#E19A37]"
          nameButton={!id ? "Criar" : "Editar"}
        />
        <ButtonBg
          handle={() => nav("/")}
          className="text-[#E19A37] border-[1px] border-[#E19A37] "
          nameButton="Voltar"
        />
      </div>
    </form>
  );
};

export default Form;
