import { getAllAnalytics } from "@/api";
import TodoList from "./components/TodoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics de Atividade",
};
export default async function Home() {
  const tasks = await getAllAnalytics();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Analytics de Atividade</h1>
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
