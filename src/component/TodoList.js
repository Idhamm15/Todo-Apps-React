import React, { useState, useEffect } from "react";
import FormAdd from "./FormAdd";
import axios from "axios";
import ListItemTodo from "./ListItemTodo";

const TodoList = () => {
  //  Membuat variable url untuk koneksi api
  const url = "http://localhost:5000/data";

  // Membuat use state
  const [todos, setTodos] = useState([]);
  // GET ALL TODOS
  useEffect(() => {
    axios.get(url).then((res) => {
      try {
        // console.log(res.data); // Menampilkan datanya
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    });
  });

  // ADD TODO
  function addTodo(todo) {
    return axios.post(url, todo);
  }

  // DELETE
  function deleteTodo(id) {
    return axios.delete(`${url}/${id}`);
  }

  // UPDATE DATA
  function updateTodo(id, todos) {
    return axios.put(`${url}/${id}`, todos);
  }

  return (
    <>
      <FormAdd addData={addTodo} />
      <ul>
        {todos
          .map((todo) => (
            <ListItemTodo
              deleteData={deleteTodo}
              updateData={updateTodo}
              todos={todo.todo}
              key={todo.id}
              id={todo.id}
            />
          ))
          // .reverse untuk setting data yang terbaru adalah ada yang peling atas
          .reverse()}
      </ul>
    </>
  );
};

export default TodoList;
