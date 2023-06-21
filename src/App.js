import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Displaystudent from './pages/students/components/Displaystudent';
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/student" element={<Displaystudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
