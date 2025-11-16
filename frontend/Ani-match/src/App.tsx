import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Adopt from "./pages/Adopt/Adopt";
import About from "./pages/About/About";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
  
}

export default App;
