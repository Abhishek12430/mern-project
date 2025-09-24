import StudentForm from "./StudentForm"
import StudentList from "./StudentList"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<StudentForm/>}/>
      <Route path="/list" element={<StudentList/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
