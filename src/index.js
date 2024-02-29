import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/main.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BasicNavBar from "./components/BasicNavBar";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import WhyHouses from "./pages/WhyHouses";
import Blogs from "./pages/Blogs";
import Post from "./pages/Post";
import Error404 from "./pages/Error404";
import HowItWorks from "./pages/HowItWorks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BasicNavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/why-houses" element={<WhyHouses />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<Post />} />
      <Route path="/not-found" element={<Error404 />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
