import React, { useState } from 'react';


import './asset/scss/common.css';

function TodoForm({ onSubmit,editTodo,onCancel  }) {
  const [subject, setSubject] = useState(editTodo ? editTodo.subject : '');
  const [description, setDescription] = useState(editTodo ? editTodo.description : '');
  const [priority, setPriority] = useState(editTodo ? editTodo.priority : 'Low');
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ subject, description, priority });
    setSubject('');
    setDescription('');
    setPriority('Low');
  };
  const handleCancel = () => {
    onCancel();
    setSubject(editTodo ? editTodo.subject : '');
    setDescription(editTodo ? editTodo.description : '');
    setPriority(editTodo ? editTodo.priority : 'Low');
  };

  return (
    <>
<div className='borderform'>
       <div style={{border: '1px solid red',width:'300px',height:'300px',padding:'20px' }}>
    <form onSubmit={handleSubmit}>
      <div className='subjectform'>
        <label htmlFor="subject">Subject:</label>
        <input className='inputsub' id="subject" type="text" value={subject} onChange={handleSubjectChange} required />
      </div>
      <div className='desc'>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required />
      </div>
      <div className='list'>
        <label htmlFor="priority">Priority:</label>
        <select className='inputsub' id="priority" value={priority} onChange={handlePriorityChange} required>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button className='addbtn' type="submit">{editTodo ? 'Update' : 'Add'} Todo</button>
      {editTodo && <button className='addbtn' type="button" onClick={handleCancel}>Cancel</button>}

    </form>
    </div>
    </div>
    </>
  );
}

export default TodoForm;
