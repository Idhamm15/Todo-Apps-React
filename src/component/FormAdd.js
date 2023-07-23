import React, {useState} from "react";
import axios from "axios";

const FormAdd = ({ addData }) => {
  const [initialTodo, setInitialTodo] = useState({ todo: "" });
  
  function handlerChange(e) {
    setInitialTodo({ todo: e.target.value });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (initialTodo.todo !== "") {
        addData(initialTodo);
        setInitialTodo({ todo: "" });
    }
    
  }

  return (
    <form className="flex" onSubmit={handlerSubmit}>
      <input
        type="text"
        className="input-add"
        onChange={handlerChange}
        placeholder="Ketik todo.."
        value={initialTodo.todo}
      />
      <button type="submit" className="btn btn__add">Add</button>
    </form>
  );
}

export default FormAdd;
