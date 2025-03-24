import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import FavoriteColor from './pages/FavoriteColor'
import ReminderPage from './pages/ReminderPage'
import Page404 from './pages/Page404'




function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colors" element={<FavoriteColor />} />
        <Route path="/reminder" element={<ReminderPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
