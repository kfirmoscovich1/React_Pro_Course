import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Graph from "./pages/Graph"
import Page404 from "./pages/Page404"

export default function App() {


  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
  )
}
