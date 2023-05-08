import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleEditTodo = (index) => {
    const todo = todos[index];
    setEditTodo(todo);
    handleDeleteTodo(index);
  };
  const handleUpdateTodo = (todo, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 0, todo);
    setTodos(newTodos);
    setEditTodo(null);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const handleCancelEdit = () => {
    setEditTodo(null);
  };

  return (
    <div className=''>
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleAddTodo} editTodo={editTodo} onUpdate={handleEditTodo} onCancel={handleCancelEdit}
 />
      <ul className='uilist'>
        {todos.map((todo, index) => (
          <li className='formdiv' style={{width:'200px',height:'200px',padding:'20px' }} key={index}>
            <h2>{todo.subject}</h2>
            <p>{todo.description}</p>
            <p>Priority: {todo.priority}</p>
            <button onClick={() => handleDeleteTodo(index)} className='addbtn' >Delete</button>
            <button onClick={() => handleEditTodo(index)} className='addbtn' >Update</button>

            {/*  */}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TodoList;
