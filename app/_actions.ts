"use server";

import { createTodo } from "@/lib/todos";

export async function createTodoAction(title: string) {
  await createTodo(title);
}
