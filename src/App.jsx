import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = (index) => {
    const updatedTodos = [...todos];
    const newTodo = prompt("Edit your task:", updatedTodos[index].todo);
    if (newTodo !== null) {
      updatedTodos[index] = { todo: newTodo, isCompleted: false };
      setTodos(updatedTodos);
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-screen bg-violet-300 flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl font-bold text-gray-800'>Enter Your Task</h1>
          <div className="input flex gap-3">
            <input
              onChange={handleChange}
              type="text"
              value={todo}
              placeholder="Add a new task"
              className='bg-slate-500 text-white rounded-md w-60 p-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <button onClick={handleAdd} className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200'>Add Task</button>
          </div>
        </div>

        <div className="todos flex flex-col bg-blue-400 rounded-md p-5 gap-5 max-h-96 overflow-y-auto">
          <h2 className='text-xl font-semibold text-white'>Tasks</h2>

          {todos.length === 0 ? (
            <span className="text-white">No tasks available.</span>
          ) : (
            todos.map((item, index) => (
              <div key={index} className="todo flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
                <span className="text-gray-700 text-lg">{item.todo}</span>
                <div className="flex space-x-2">
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Edit</button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
