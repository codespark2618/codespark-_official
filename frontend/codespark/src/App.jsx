import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Footer from "./Components/Footer"; 
import Contact from "./Components/Contact";
import Internship from "./Pages/Internship";
import AboutStory from "./Pages/AboutStory";
import Career from "./Pages/Career";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/coursedetails" element={<CourseDetails />} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/about" element={<AboutStory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;