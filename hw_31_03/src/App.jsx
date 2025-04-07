import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StudentContext } from "./context/StudentContext"
import "./App.css"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Page404 from "./pages/Page404"
import StudentsListPage from "./pages/StudentsListPage"
import NewStudentForm from "./pages/NewStudentForm"

export default function App() {
  const [students, setStudents] = useState(() =>
    JSON.parse(localStorage.getItem("students") || "[]")
  )
  

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students))
  }, [students])

  const addStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score }])
  }

  const resetStudents = () => {
    setStudents([])
  }

  return (
    <StudentContext.Provider value={{ students, addStudent, resetStudents }}>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/students" element={<StudentsListPage />} />
          <Route path="/add" element={<NewStudentForm />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </StudentContext.Provider>
  )
}
