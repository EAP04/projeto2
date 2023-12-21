import { getAllAtividade } from "@/api";
import AddTask from "../../components/estudante/AddTask";
import TodoList from "../../components/estudante/TodoList";
import App from "next/app";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atividade Estudande",
};
export default async function Home() {
  const tasks = await getAllAtividade();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Atividade Estudande</h1>
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
