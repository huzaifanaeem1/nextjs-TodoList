"use client"
import { todo } from 'node:test';
import { useState } from 'react'
import { text } from 'stream/consumers';
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputvalue, setInputValue] = useState("");

  // add items
  const addTodo = () => {
    if (inputvalue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputvalue, completed: false },
    ]);
    setInputValue("")
  };
  //add values id
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  };

  //delete todo 
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-teal-950 text-black py-4'>
        <div className='w-4xl mx-auto text-center'>
          <h1 className=' text-white text-center text-lg font-black'>Todo List By Huzaifa Naeem</h1>
          <p className='text-white text-center font-medium mt-3'>Manage your tasks effortlessly with this sleek Next.js app. Stay organized and on track every day!</p>
        </div>
      </header>

      <main className='flex-grow flex items-center justify-center'>
        <div className='max-w-md mx-auto p-4 bg-slate-300 rounded-lg shadow-md'>
          <div className='mb-4'>
            <div className='flex'>
              <input
                type="text"
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value)}
                className='text-black font-medium flex-grow p-2 border border-gray-400 rounded-lg w-full'
                placeholder='Add a new task...'
              />
              <button
                onClick={addTodo}
                className='ml-2 px-4 py-2 bg-teal-900 text-white rounded-lg hover:bg-teal-600'>
                Add
              </button>
            </div>
          </div>
          <ul className='space-y-2'>
            {todos.map((todo) => (
              <li key={todo.id}
                className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${todo.completed ? 'bg-teal-800 text-black line-through' : 'bg-teal-700'
                  }`}
              >
                <span>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className='text-white px-2 py-1 text-sm bg-yellow-600 rounded-lg hover:bg-yellow-500 mr-2'> {/* Added mr-2 */}
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className='text-white px-2 py-1 text-sm bg-red-800 rounded-lg hover:bg-red-500'>
                    Delete
                  </button>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </main>
    </div>
  )
};
export default Todolist;