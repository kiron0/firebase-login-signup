import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
