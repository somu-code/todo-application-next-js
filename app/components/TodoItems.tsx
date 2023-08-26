import { Todo } from "@prisma/client";
import React from "react";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItems({ todo }: TodoItemProps) {
  return <li>{todo.title}</li>;
}
