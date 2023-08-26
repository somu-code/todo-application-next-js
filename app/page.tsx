import { getTodos } from "@/lib/todos";
import Image from "next/image";
import TodoItems from "./components/TodoItems";
import NewTodoForm from "./components/NewTodoForm";

export default async function Home() {
  const { todos } = await getTodos();
  return (
    <section>
      <div className="container">
        <h1>Todos</h1>
        <NewTodoForm />
        <h2>Previous todos:</h2>
        <ul>
          {todos?.map((todo) => (
            <TodoItems key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
