import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input
          type="text"
          value={novoItem}
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
      <div className="listaTarefas">
        <div className="item">
          <span>Tarefa de Exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <div className="item completo">
          <span>Tarefa de Exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <button className="deleteAll">Deletar Todas</button>
      </div>
    </div>
  );
}

export default TodoList;
