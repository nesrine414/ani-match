import "./Login.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";
import { useState, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LOGOImg from "../../assets/logo.png";
import DogImg from "../../assets/dogs.png";

interface LoginResponse {
  token: string;
  message: string;
  user: {
    id: number;
    full_name: string;
    email: string;
    location?: string;
    phone?: string;
  };
}

function LoginPage(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (): Promise<void> => {
  try {
    const res = await axios.post<LoginResponse>(
      "http://localhost:5000/api/login",
      { email, password }
    );

    setUserName(res.data.user.full_name);
    setShowSuccess(true);
    localStorage.setItem("token", res.data.token);

    setTimeout(() => {
      setShowSuccess(false);
      navigate("/"); // 🔥 redirect لصفحة accueil
    }, 3000);

  } catch (err: unknown) {
    const error = err as any;
    alert(error?.response?.data?.message || "Login failed. Please try again.");
  }
};


  return (
    <div className="page">
      {/* 🎉 MESSAGE DE SUCCÈS */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-message">
            <div className="success-icon">✨</div>
            <h1>Welcome Back!</h1>
            <h2>{userName}</h2>
            <p>🎉 Login Successful 🎉</p>
            <div className="loading-bar"></div>
          </div>
        </div>
      )}

      <div className="logo">
        <img src={LOGOImg} alt="Ani-match Logo" />
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