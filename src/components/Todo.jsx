import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItems from "./TodoItems";
const Todo = () => {
  let initialTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const inputRef = useRef();
  const [todos, setTodos] = useState(initialTodos);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // --------ADD TESK---------

  const handleAddTask = () => {
    const inputText = inputRef.current.value;
    if (!inputText) {
      return null;
    }
    const newTask = {
      id: uuidv4(),
      text: inputText,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTask]);
    inputRef.current.value = "";
    setIsEdit(false);
  };

  // --------Delete TESK---------

  const handleDeleteTask = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  // --------Toggle TESK---------

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  // --------Edit TESK---------
  const handleEditTask = (id) => {
    let task = todos.filter((item) => item.id === id);
    inputRef.current.value = task[0].text;
    setIsEdit(true);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <>
      {/* input box */}
      <div className="flex items-center my-4 w-full bg-slate-100 rounded-full">
        <input
          ref={inputRef}
          className="flex-1 bg-transparent border-0 outline-none p-3 pl-6 placeholder:italic placeholder:text-slate-400"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={handleAddTask}
          className="bg-sky-600 w-28 p-3 rounded-full text-white"
        >
          {isEdit ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* Todo List */}
      <div>
        {todos.map((item) => {
          return (
            <TodoItems
              key={item.id}
              list={item}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
              toggle={toggle}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todo;
