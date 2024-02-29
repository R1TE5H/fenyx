import React, { useState } from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

import useWindowDimensions from "../services/windowSize";

import { FaSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "../styles/nav-bar.css";
import "../styles/main.css";

export default function BasicNavBar() {
  const { height, width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {width >= 960 && (
        <Headroom style={{ zIndex: "10" }}>
          <div className="nav-bar">
            <Link
              className="logo link"
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaSquare style={{ marginRight: "20px" }} size={30} />
              FENYX
            </Link>

            <div
              className=""
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Link className="nav-link link" to="/why-houses">
                Why Houses
              </Link>
              <Link className="nav-link link" to="/how-it-works">
                How It Works
              </Link>
              <Link className="nav-link link" to="/blogs">
                Blogs
              </Link>

              <Link className="nav-link link" to="/sign-up">
                Get Started
              </Link>
              <Link className="nav-link link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </Headroom>
      )}
      {width < 960 && (
        <Headroom style={{ zIndex: "10" }}>
          <div className="nav-bar">
            <Link
              className="logo link"
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaSquare style={{ marginRight: "20px" }} size={30} />
              FENYX
            </Link>
            <GiHamburgerMenu
              size={40}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          </div>
          {isOpen && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  paddingTop: "30px",
                  position: "absolute",
                  height: `${height}px`,
                  width: "30%",
                  minWidth: "150px",
                  backdropFilter: `blur(60px)`,
                  right: "0px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <div
                  style={{
                    padding: "0px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Link
                    to="/sign-up"
                    className="hamburger-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    GET STARTED
                  </Link>
                  <Link
                    to="/login"
                    className="hamburger-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    LOGIN
                  </Link>
                </div>
                <div
                  style={{
                    padding: "0px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Link
                    to="/why-houses"
                    className="hamburger-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    WHY HOUSES
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="hamburger-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    HOW IT WORKS
                  </Link>
                  <Link
                    to="/blogs"
                    className="hamburger-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    BLOGS
                  </Link>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  height: `${height}px`,
                  width: "70%",
                  background: "transparent",
                }}
                onTouchStart={() => setIsOpen((isOpen) => !isOpen)}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              />
            </div>
          )}
        </Headroom>
      )}
    </>
  );
}
