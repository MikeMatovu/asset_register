"use client";
import "../styles/main.css";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../utils/apiConstants";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = ({ loginStatus }) => {
  const { loggedIn, setLoggedIn } = loginStatus;

  const router = useRouter();

  const submitData = () => {
    let url = API_ENDPOINTS.LOGIN;
    let data = {
      email: loginData.email,
      userPassword: loginData.password,
    };

    axios.post(url, data).then((res) => {
      if (res.status === 201) {
        localStorage.setItem("userID", res.data.userID);
        localStorage.setItem("type_id", res.data.type_id);
        setLoggedIn(true);
        // router.push("/dashboard");
      } else {
        alert("Incorrect credentials");
        router.push("/");
      }
    });
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>ASSET REGISTER</h2>
      <div className="log_in">
        <h2>USER LOGIN</h2>
        <form method="post" autoComplete="off">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <br />

          <button name="login" id="submit" onClick={submitData}>
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
