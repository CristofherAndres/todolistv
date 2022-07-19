import React from "react";

/* debo recibir los props */
export function TodoItem({ todo }) {
  const { id, task } = todo;
  return <li className="list-group-item"> {task} </li>;
}
