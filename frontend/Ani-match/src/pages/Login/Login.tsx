import "./Login.css";
import { useState, ReactElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGOImg from "../../assets/logo.png";
import DogImg from "../../assets/dogs.png";
import Swal from "sweetalert2";


interface LoginResponse {
  token: string;
}

function LoginPage(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (): Promise<void> => {
  try {
    const res = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });

    Swal.fire({
      icon: "success",
      title: "Welcome back! 🐶",
      text: "Login successful!",
      confirmButtonColor: "#0d9488",
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));

  } catch (err: any) {
    Swal.fire({
      icon: "error",
      title: "Oops 😕",
      text: err?.response?.data?.message || "Something went wrong",
      confirmButtonColor: "#dc2626",
    });
  }
};


  return (
    <div className="page">
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">REMEMBER FOR A MONTH</label>
          </div>

          <div className="buttons">
            <button className="fb">Sign In with Facebook</button>
            <button className="email" onClick={handleLogin}>
              Sign In
            </button>
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
