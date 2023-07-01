import React, { useState } from "react"
import "./TodoList.css"
import Icone from "./assets/lista.png"

function TodoList() {
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState("")

  function adicionaItem(form) {
    form.preventDefault()
    if (!novoItem) return
    setLista([...lista, { text: novoItem, isComplited: false }])
    setNovoItem("")
    document.getElementById(".input-entrada").focus()
  }

  function clicou(index) {
    const listaAux = [...lista]
    listaAux[index].isComplited = !listaAux[index].isComplited
    setLista(listaAux)
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          type="text"
          value={novoItem}
          onChange={(e) => {
            setNovoItem(e.target.value)
          }}
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
      <div className="listaTarefas">
        <div style={{ textAlign: "center" }}>
          {lista.length < 1 ? (
            <img src={Icone} className="listaLogo" />
          ) : (
            lista.map((item, index) => (
              <div
                key={index}
                className={item.isComplited ? "item completo" : "item"}>
                <span
                  onClick={() => {
                    clicou(index)
                  }}>
                  {item.text}
                </span>
                <button className="del">Deletar</button>
              </div>
            ))
          )}
        </div>
        <button className="deleteAll">Deletar Todas</button>
      </div>
    </div>
  )
}

export default TodoList
