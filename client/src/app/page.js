"use client";
import { useState } from "react";
import Login from "./components/Login";
import App from "./App";

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) {
    return <App loginStatus={{ loggedIn, setLoggedIn }} />;
  } else {
    return <Login loginStatus={{ loggedIn, setLoggedIn }} />;
  }
};


export default HomePage;
