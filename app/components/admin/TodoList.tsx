// import { ITask } from "@/types/Task";
import { Atividade } from "../../../types/atividade";
import React from "react";
// import Task from "./Task";
import Task from "./Task";

interface TodoListProps {
  tasks: Atividade[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  // console.log(tasks.id);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Atividade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
