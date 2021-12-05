import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "../components/home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
