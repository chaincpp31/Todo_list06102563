import React from "react";
import Input from "./.components/Input";
import Lane from "./.components/Lane";
import Title from "./.components/Title";
import "./main.css";
import { useTodo } from "./contexts/ActionContext";

export default function App() {
  const [, { handleAddTodo }] = useTodo();

  return (
    <div className="container">
      <Title>Simple Kanban board</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane />
    </div>
  );
}
