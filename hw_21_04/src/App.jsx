import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Page404 from './pages/Page404'
import About from './pages/About'
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import AppContextProvider from './context/AppContext'



function App() {

  return (
    <AppContextProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
