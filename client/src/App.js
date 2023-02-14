import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Register /> */}
    </div>
  );
}

export default App;
