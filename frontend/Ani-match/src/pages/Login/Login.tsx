import "./Login.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";
import { useState, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.svg";
import DogImg from "../../assets/dogs.png";

interface LoginResponse {
  token: string;
}

function LoginPage(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (): Promise<void> => {
    try {
      const res = await axios.post<LoginResponse>("http://localhost:5000/login", {
        email,
        password,
      });

      alert("Login successful!");
      localStorage.setItem("token", res.data.token);
    } catch (err: unknown) {
      const error = err as any;
      alert(error?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="page">
      {/* ===== HEADER UNIFIÉ ===== */}
      <img src={logo} alt="Ani-match Logo" className="corner-logo" />
      
      <div
        className="corner-user"
        onClick={() => navigate("/login")}
        title="Login"
      >
        <svg width="60" height="60" viewBox="0 0 100 60" fill="none">
          <g fill="#3098B7">
            <rect x="0" y="15" width="25" height="3" rx="1.5" />
            <rect x="0" y="25" width="25" height="3" rx="1.5" />
            <rect x="0" y="35" width="25" height="3" rx="1.5" />
            <circle cx="65" cy="20" r="15" />
            <path d="M45 55C45 42 52 38 65 38C78 38 85 42 85 55V60H45V55Z" />
          </g>
        </svg>
      </div>

      <div className="login-container">
        <div className="dogs">
          <img src={DogImg} alt="Dogs" />
        </div>

        <div className="login-card">
          <h2>Sign In</h2>

          <label>Username or Email</label>
          <input
            type="text"
            placeholder="username or email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">REMEMBER FOR A MONTH</label>
          </div>

          <div className="buttons">
            <button className="fb">Sign In with Facebook</button>
            <p><button className="email" onClick={handleLogin}>Sign In</button></p>
          </div>

          <p className="register">
            Not signed in? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;