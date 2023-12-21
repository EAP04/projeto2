// import { ITask } from "./types/tasks";
import { Analytics } from "./types/analytics";
import { Atividade } from "./types/atividade";
// import { Analytics } from "./types/analytics";

// const baseUrl = "http://localhost:3001";
const baseUrl_at = "http://localhost:3001";
const baseUrl_an = "http://localhost:3002";
// console.log(baseUrl);

export const getAllAtividade = async (): Promise<Atividade[]> => {
  const res = await fetch(`${baseUrl_at}/campos`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addAtividade = async (todo: Atividade): Promise<Atividade> => {
  const res = await fetch(`${baseUrl_at}/campos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editAtividade = async (todo: Atividade): Promise<Atividade> => {
  const res = await fetch(`${baseUrl_at}/campos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteAtividade = async (id: string): Promise<void> => {
  await fetch(`${baseUrl_at}/campos/${id}`, {
    method: "DELETE",
  });
};

export const getAllAnalytics = async (): Promise<Analytics[]> => {
  const res = await fetch(`${baseUrl_an}/quantitativas`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addAnalytics = async (todo: Analytics): Promise<Analytics> => {
  const res = await fetch(`${baseUrl_an}/quantitativas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editAnalytics = async (todo: Analytics): Promise<Analytics> => {
  const res = await fetch(`${baseUrl_an}/quantitativas/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteAnalytics = async (id: string): Promise<void> => {
  await fetch(`${baseUrl_an}/quantitativas/${id}`, {
    method: "DELETE",
  });
};
