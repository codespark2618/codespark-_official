import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Career from "./Pages/Career";
import Courses from "./Pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;