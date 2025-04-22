import React from 'react'
import { toast } from 'react-toastify'

export default function About() {

  const onBtnClick = () => {
    toast.success("Message from about page")
    toast.error("Error from about page")
    toast.warning("Warning from about page")
  }

  return (
    <div className='container'>
      <h2>About page</h2>
      <button onClick={onBtnClick}>Click for toast message</button>
    </div>
  )
}