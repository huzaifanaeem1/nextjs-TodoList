"use client";
import React, { useState } from "react";
import Footer from "./components/Footer";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-[#FAB4EF] to-[#470D5D]">
      <header className="text-black py-4">
        <div className="w-4xl mx-auto text-center">
          <h1 className="text-white text-6xl font-black pt-16">Todo List</h1>
          <p className="text-white font-medium mt-3 pt-2 text-center px-4 sm:px-0">
            plan smarter, stay productive, and achieve your goals seamlessly with this intuitive To-Do list app!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white/10 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="text-black flex-grow p-2 border border-white rounded-lg"
                placeholder="Add a new task..."
              />
              <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700"
              >
                Add
              </button>
            </div>
          </div>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-start p-2 border-2 border-white rounded-lg ${
                  todo.completed ? "bg-transparent text-black line-through" : "bg-transparent"
                }`}
              >
                <span className="flex-grow truncate mr-4">{todo.text}</span>
                <div className="flex-shrink-0 flex space-x-2">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="text-white px-2 py-1 text-sm bg-green-800 rounded-lg hover:bg-green-900"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-white px-2 py-1 text-sm bg-red-800 rounded-lg hover:bg-red-900"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Todolist;
