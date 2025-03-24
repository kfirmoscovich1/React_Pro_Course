import React, { useRef } from 'react';

export default function TaskForm({ addItem }) {
  const nameRef = useRef();
  const dateRef = useRef();

  const onSub = (e) => {
    e.preventDefault();
    const item = {
      name: nameRef.current.value,
      date: dateRef.current.value,
      id: Date.now()
    };
    addItem(item);
    nameRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div>
      <h2>Add new task</h2>
      <form onSubmit={onSub} className='col-lg-6'>
        <label>Task name:</label>
        <input ref={nameRef} className='form-control' type="text" />

        <label className='mt-2'>Task date:</label>
        <input ref={dateRef} className='form-control' type="datetime-local" />

        <button className='btn btn-success mt-3'>Add Task</button>
      </form>
    </div>
  );
}
