import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // ou utilisez une autre icône

import LOGOImg from "../../assets/logo.png";
import DogImg from "../../assets/dogs.png";
import "./Signup.css";

const AniMatchSignup: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Privacy Policy");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        location: formData.location,
        phoneNumber: formData.phoneNumber,
      });

      // Afficher le message de succès
      setShowSuccess(true);

      // Rediriger après 3 secondes
      setTimeout(() => {
        navigate("/login"); // ou la route de votre choix
      }, 3000);
    } catch (err: any) {
      alert("❌ Signup failed: " + (err.response?.data?.message || "Unknown error"));
      console.error(err);
    }
  };

  return (
    <div className="page">
      {/* Message de succès animé */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <CheckCircle size={48} color="white" strokeWidth={3} />
            </div>
            
            <h2 className="success-title">Welcome! 🎉</h2>
            <p className="success-subtitle">Signup Successful</p>
            <p className="success-text">Redirecting to login page...</p>
          </div>
        </div>
      )}

      {/* ===== HEADER ===== */}
      <div className="logo">
        <img src={LOGOImg} alt="Ani-match Logo" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="login-container">
        <div className="dogs">
          <img src={DogImg} alt="Dogs" />
        </div>

        <div className="login-card">
          <h2>Create an account</h2>

          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />

            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />

            <label>Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />

            <div className="remember">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />
              <label>
                I agree to the <a href="#">Terms</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="email">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AniMatchSignup;