import React, { useLayoutEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function ReminderPage() {
  const [list, setList] = useState([
    { name: "Do Homework", date: "2025-03-25T09:00", id: 1 }
  ]);

  useLayoutEffect(() => {
    checkLocal();
  }, []);

  const checkLocal = () => {
    if (localStorage.getItem("tasks")) {
      setList(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  const addItem = (item) => {
    const newList = [...list, item];
    setList(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
  };

  return (
    <div className="container">
      <TaskForm addItem={addItem} />
      <TaskList list={list} />
    </div>
  );
}
