import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import HomePage from "./pages/homecat/HomePage";
import HomeDog from "./pages/homedog/HomeDog";
import Adopt from "./pages/Adopt/Adopt";
import About from "./pages/About/About";
import LoginPage from "./pages/Login/Login";
import AniMatchSignup from "./pages/Signup/Signup";
import PetProfile from "./pages/PetProfile/PetProfile";
import PetProfile2 from "./pages/PetProfile2/PetProfile2";
import Profile from "./pages/Profile/Profile"; // ✅ AJOUTÉ

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Cats */}
        <Route path="/homecat" element={<HomePage />} />

        {/* Dogs */}
        <Route path="/homedog" element={<HomeDog />} />

        {/* Other pages */}
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<AniMatchSignup />} />

        {/* Pet Profiles */}
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/pet-profile-2" element={<PetProfile2 />} />

        {/* User Profile */}
        <Route path="/profile" element={<Profile />} /> {/* ✅ AJOUTÉ */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
