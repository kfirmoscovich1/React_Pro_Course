import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>משימה 1 - Counter</h2>
      <Task1 />
      <hr />

      <h2>משימה 2 - Exchange Calculator</h2>
      <Task2 />
      <hr />

      <h2>משימה 3 - Bitcoin Info</h2>
      <Task3 />
    </div>
  );
}

export default App;
