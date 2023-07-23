import React, {useState} from "react";

const ListItemTodo = ({ todos, id, deleteData, updateData }) => {
  //   function deleteHandler() {
  //     deleteData(id);
  //   }

  const [isEdit, setIsEdit] = useState(false);
  const [initialTodo, setInitialTodo] = useState({ todo: todos })

  function changeHandler(e) {
    setInitialTodo({todo : e.target.value})
    console.log(initialTodo);
  }

  function switchEditBtn() {
    setIsEdit(!isEdit);
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
    updateData(id, initialTodo);
    // console.log(initialTodo);
  }

  return (
    <li className="todo-item" onSubmit={submitHandler}>
      <form className="form-edit">
        {!isEdit ? (
          <input
            disabled
            type="text"
            className="input-no-border"
            value={initialTodo.todo} // Menampilkan data dengan memamnggil nama useState.namaObject di api nya
            onChange={changeHandler}
          />
        ) : (
          <input
            type="text"
            className="input-with-border"
            value={initialTodo.todo} // Menampilkan data dengan memamnggil nama useState.namaObject di api nya
            onChange={changeHandler}
          />
        )}
      </form>
      {!isEdit ? (
        <>
          <button
            className="btn btn__action btn__action-edit"
            onClick={switchEditBtn}
          >
            Edit
          </button>
          <button
            className="btn btn__action btn__action-delete"
            onClick={() => deleteData(id)}
          >
            Hapus
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn__action"
            onClick={submitHandler}
          >
            Simpan
          </button>
          <button
            className="btn btn__action btn__action-batal"
            onClick={switchEditBtn}
          >
            Batal
          </button>
        </>
      )}
    </li>
  );
};

export default ListItemTodo;
