"use client";

import { Atividade } from "@/types/atividade";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteAtividade, editAtividade } from "@/api";

// if (task.nome != null) {
//   let task;
//   task = task;
//   console.log(task);
// }
interface TaskProps {
  task: Atividade;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.nome);
  const [descricaoEdit, setdescricaoEdit] = useState<string>(task.descricao);

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
