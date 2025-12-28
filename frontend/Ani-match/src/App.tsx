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
import Profile from "./pages/Profile/Profile";
import SearchResult from "./pages/Search/SearchResult";
import AdoptionChecklist from "./pages/AdoptionChecklist/AdoptionChecklist";
import DogYears from "./pages/DogYears/DogYears";
import AdoptionFAQs from "./pages/AdoptionFAQs/AdoptionFAQs";



import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/homecat" element={<HomePage />} />
        <Route path="/homedog" element={<HomeDog />} />

        {/* ✅ SEARCH PAGE */}
        <Route path="/search" element={<SearchResult />} />

        <Route path="/adopt" element={<Adopt />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<AniMatchSignup />} />
        <Route path="/adoption-checklist" element={<AdoptionChecklist />} />
        <Route path="/dog-years" element={<DogYears />} />
        <Route path="/adoption-faqs" element={<AdoptionFAQs />} />
        

       
        

        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/pet-profile-2" element={<PetProfile2 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
