import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Journey from "./journey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;