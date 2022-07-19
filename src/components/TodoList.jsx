import React, { Fragment, useState, useRef } from "react";
/* Importar todoitem */
import { TodoItem } from "./TodoItem";

export function TodoList() {
  /* Definir una lista con tareas */
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1" },
    { id: 2, task: "Tarea 2" },
    { id: 3, task: "Tarea 3" },
    { id: 4, task: "Tarea 4" },
    { id: 5, task: "Tarea 5" },
    { id: 6, task: "Tarea 6" },
  ]);

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese una tarea"
        />
        {/* Boton agregar */}
        <button className="btn btn-outline-success ms-2">
          <i className="bi bi-plus-circle"></i>
        </button>
        {/* Botón eliminar */}
        <button className="btn btn-outline-danger ms-2">
          <i className="bi bi-trash2"></i>
        </button>
      </div>

      {/* Cargar lista con tareas */}
      <div>
        <ul className="list-group my-4">
          {/* Método avanzado de js */}
          {/* map es como un foreach */}
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id}></TodoItem>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
