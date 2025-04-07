import { useContext, useRef } from "react"
import { StudentContext } from "../context/StudentContext"

export default function NewStudentForm() {
  const nameRef = useRef()
  const scoreRef = useRef()
  const { addStudent } = useContext(StudentContext)

  const onSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const score = scoreRef.current.value
    if (!name || !score) return
    addStudent(name, score)
    e.target.reset()
  }

  return (
    <div className="container">
      <h2>newStudentForm.jsx</h2>
      <form onSubmit={onSubmit}>
        <label>Name:</label><br />
        <input ref={nameRef} /><br />
        <label>Score:</label><br />
        <input ref={scoreRef} type="number" /><br />
        <button type="submit" style={{ background: "lime", margin: "10px" }}>
          Add student
        </button>
      </form>
    </div>
  )
}
