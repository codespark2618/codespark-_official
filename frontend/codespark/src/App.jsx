import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Career from "./Pages/Career";
import Courses from "./Pages/Courses";
import StudentJourney from "./Pages/StudentJourney";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/courses" element={<Courses />} />
       <Route path="/studentjourney" element={<StudentJourney />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;