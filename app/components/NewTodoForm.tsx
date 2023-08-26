"use client";

import React from "react";
import { createTodoAction } from "../_actions";

export default function NewTodoForm() {
  async function action(data: FormData) {
    const title = data.get("title");
    if (!title || typeof title !== "string") return;
    console.log("this code runs");
    await createTodoAction(title);
    // call a server action to create a todo
    // reset the form
  }
  return (
    <form action={action}>
      <h2>Create a new Todo</h2>
      <input
        type="text"
        name="title"
        id="title"
        className="border border-black"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
