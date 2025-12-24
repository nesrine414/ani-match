import "./Login.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";
import { useState, ReactElement } from "react";
import axios from "axios";
import LOGOImg from "../../assets/logo.png";
import DogImg from "../../assets/dogs.png";



interface LoginResponse {
  token: string;
}

function LoginPage(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");   // FIXED
  // const navigate = useNavigate();

  const handleLogin = async (): Promise<void> => {
    try {
      const res = await axios.post<LoginResponse>("http://localhost:5000/login", {
        email,
        password,
      });

      alert("Login successful!  " );
      localStorage.setItem("token", res.data.token);
    } catch (err: unknown) {
      const error = err as any;
      alert(error?.response?.data?.message || "Error");
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
            <p><button className="email" onClick={handleLogin}>Sign In with Email</button></p>
            
          </div>

          <p className="register">
            Not signed in? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
