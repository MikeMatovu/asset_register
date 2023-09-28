import "../styles/main.css"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_ENDPOINTS } from "../utils/apiConstants";

const Login = ({ loginStatus }) => {
  const router = useRouter();
  const { loggedIn, setLoggedIn } = loginStatus;

  const [loginData, setLoginData] = useState({
    email: "",
    userPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
      console.log(response)
      if (response.status === 201) {
        localStorage.setItem("userID", response.data.userID);
        localStorage.setItem("type_id", response.data.type_id);
        setLoggedIn(true);
        router.push("/dashboard");
      } else {
        alert("Incorrect credentials");
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2>ASSET REGISTER</h2>
      <div className="log-in">
        <h2>USER LOGIN</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="userPassword"
              value={loginData.userPassword}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" name="login" id="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
