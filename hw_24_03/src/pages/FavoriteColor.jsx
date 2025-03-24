import React, { useEffect, useRef, useState } from 'react';

export default function FavoriteColor() {
  const colorRef = useRef(); // Reference to the input field
  const [bgColor, setBgColor] = useState("white"); // Default background color

  useEffect(() => {
    // Check if a color is stored in localStorage
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
      setBgColor(savedColor); // Apply the saved color
    }
  }, []);

  const onSaveColor = () => {
    const color = colorRef.current.value;
    setBgColor(color); // Change the background color
    localStorage.setItem("color", color); // Save the color to localStorage
  };

  return (
    <div className='container' style={{ backgroundColor: bgColor, padding: "20px", minHeight: "100vh" }}>
      <h1>Choose your favorite color:</h1>
      <input className='form-control' ref={colorRef} type="text" placeholder="Enter a color (e.g. red or #ffcc00)" style={{ width: "300px" }}/>
      <button onClick={onSaveColor} className='btn btn-primary mt-2'>Set Color</button>
    </div>
  );
}
