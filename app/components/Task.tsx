"use client";

import { Analytics } from "../../types/analytics";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteAtividade, editAtividade } from "@/api";

interface TaskProps {
  task: Analytics;
}

// eslint-disable-next-line no-undef
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.nome);

  const handleSubmitEditAtividade: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    await editAtividade({
      id: task.id,
      nome: taskToEdit,
      codigoDoEstudate: "",
      descricao: "",
      valoresPossiveis: "",
      type: "",
      metricas: "",
      qualitativa: "",
      quantitativa: "",
      items: "",
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteAtividade(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <td className="w-full">{task.nome}</td>
    </tr>
  );
};

export default Task;
