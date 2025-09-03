import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
