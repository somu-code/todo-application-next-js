import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } });
    return todo;
  } catch (error) {
    return { error };
  }
}
