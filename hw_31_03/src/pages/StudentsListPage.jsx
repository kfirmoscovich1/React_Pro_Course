import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

export default function StudentsListPage() {
  const { students, resetStudents } = useContext(StudentContext)

  return (
    <div className="container">
      <h2>studentsListPage.jsx</h2>
      <table border="1" style={{ width: "300px" }}>
        <thead>
          <tr><th>#</th><th>Name</th><th>Score</th></tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3].map(i => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{students[i]?.name || ""}</td>
              <td>{students[i]?.score || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={resetStudents}
        style={{ background: "crimson", color: "white", marginTop: "10px" }} >
        Reset
      </button>
    </div>
  )
}
