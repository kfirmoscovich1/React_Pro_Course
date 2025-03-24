import React from 'react';

export default function TaskList({ list }) {
  return (
    <div>
      <h2 className='mt-4'>Your Reminders:</h2>
      <ul className='list-group col-lg-6'>
        {list.map(item => (
          <li key={item.id} className='list-group-item d-flex justify-content-between'>
            <span>{item.name}</span>
            <span style={{ fontSize: "0.85em", color: "#666" }}>
              {new Date(item.date).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
