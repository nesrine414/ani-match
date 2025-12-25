import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password mismatch ❌",
        text: "Passwords do not match",
        confirmButtonColor: "#dc2626",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      Swal.fire({
        icon: "warning",
        title: "Terms required ⚠️",
        text: "You must agree to the terms",
        confirmButtonColor: "#ca8a04",
      });
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        location: formData.location,
        phone: formData.phoneNumber,
      });

      Swal.fire({
        icon: "success",
        title: "Account created 🎉",
        text: "You can now sign in!",
        confirmButtonColor: "#0d9488",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Signup failed 😕",
        text: error?.response?.data?.message || "Something went wrong",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div className="page">
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
