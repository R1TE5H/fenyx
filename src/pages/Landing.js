import React from "react";
import { Link } from "react-router-dom";
import pattern from "../assets/landingPattern.jpg";

import "../styles/main.css";
import "../styles/landing.css";
import BlogsSwiper from "../components/BlogsSwiper";
import useWindowDimensions from "../services/windowSize";
import LocationBars from "../components/LocationBars";
import CallToAction from "../components/CallToAction";

export default function Landing() {
  const { width } = useWindowDimensions();
  return (
    <>
      <div
        className="header section"
        style={{
          background: `linear-gradient(0deg, #0a0a0a, rgba(0, 0, 0, 0)), url(${pattern})`,
        }}
      >
        <div className="fadeIn">
          <p style={{ textAlign: "center" }}>
            <span className="header-text">Redefine House Flipping.</span>
            <br />
            <br />
            <span className="medium-text">
              Supercharge your portfolio. Invest in House Flips as little as
              $100.
            </span>
          </p>
          <div
            className="center"
            style={{
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Link to="/sign-up" className="btn-lg link gradient-bg">
              GET STARTED
            </Link>
            <Link to="/login" className="btn-lg link white-outline">
              LOG IN
            </Link>
          </div>
        </div>
      </div>
      <div className="section">
        <BlogsSwiper />
      </div>
      <div
        className="section stat-container"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>
            <span className="hero">Elevate Your Investments</span>
            <br />
            <span className="medium-text">
              Unlock Massive Returns at Lightning Speeds.
            </span>
          </p>
          <Link to="/blogs" className=" link btn-sm gradient-bg">
            BLOGS
          </Link>
        </div>
        <div className="stats">
          <p>Potential Six Month Percent Returns</p>
          <p className="columns">
            <span className="gradient-text hero-stat">29</span>
            <span className="stat-label">REAL ESTATE</span>
          </p>
          <p className="columns">
            <span className="gradient-text hero-stat">10</span>
            <span className="stat-label">S&P 500</span>
          </p>
          <p className="columns">
            <span className="gradient-text hero-stat">8</span>
            <span className="stat-label">MUTUAL FUNDS</span>
          </p>
        </div>
      </div>
      <div className="section">
        <p>
          <span className="hero">Secure Your Future</span>
          <br />
          <span className="medium-text">
            Hedge Inflation and Navigate Recessions.
          </span>
        </p>

        <div style={{ marginBottom: "50px" }}>
          <Link to="/why-houses" className=" link btn-sm gradient-bg">
            LEARN MORE
          </Link>
        </div>
        <div
          className="medium-text"
          style={{
            justifyContent: "space-around",
            alignItems: "start",
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gap: "20px",
          }}
        >
          <div style={{ padding: "0px 10px" }}>
            <p className="columns">
              <span className="medium-text" style={{ fontWeight: "400" }}>
                <span style={{ fontSize: "30px", color: `var(--sun)` }}>|</span>{" "}
                Fast
              </span>
              <br />
              <span style={{ color: `var(--light_grey)` }}>
                House Flipping gets huge returns in a matter of months, enabling
                you to liquidate your gains quickly.{" "}
              </span>
            </p>
          </div>
          <div style={{ padding: "0px 10px" }}>
            <p className="columns">
              <span className="medium-text" style={{ fontWeight: "400" }}>
                <span style={{ fontSize: "30px", color: `var(--magenta)` }}>
                  |
                </span>{" "}
                Scarce
              </span>
              <br />
              <span style={{ color: `var(--light_grey)` }}>
                Real Estate's value cannot be diluted allowing it to maintain
                its scarcity, protecting your investment and enhancing its
                appreciation potential.
              </span>
            </p>
          </div>
          <div style={{ padding: "0px 10px" }}>
            <p className="columns">
              <span className="medium-text" style={{ fontWeight: "400" }}>
                <span style={{ fontSize: "30px", color: `var(--sun)` }}>|</span>{" "}
                Stable
              </span>
              <br />
              <span style={{ color: `var(--light_grey)` }}>
                Unlike volatile markets, real estate offers enduring value,
                acting as a robust foundation for long-term financial security.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <p style={{ textAlign: "center" }}>
          <span className="hero">Invest with Confidence</span>
          <br />
          <span className="medium-text">You're in Safe Hands.</span>
        </p>
        <div className="center" style={{ marginBottom: "50px" }}>
          <Link to="/how-it-works" className="link btn-sm gradient-bg">
            HOW IT WORKS
          </Link>
        </div>
        <div className={`option-container ${width > 700 ? "rows" : "columns"}`}>
          <div className="option-card">
            <div style={{ margin: "0px 20px" }}>
              <p className="option-text">
                <span className="hero"> Investor</span>
                <br />
                <span> Break into the House Flipping industry Today.</span>
              </p>
              <dl style={{ marginBottom: "30px" }}>
                <dd>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: `var(--sun)`,
                    }}
                  >
                    |
                  </span>{" "}
                  $100 minimum investments
                </dd>
                <dd>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: `var(--magenta)`,
                    }}
                  >
                    |
                  </span>{" "}
                  Pick from a catalogue of projects
                </dd>
                <dd>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: `var(--sun)`,
                    }}
                  >
                    |
                  </span>{" "}
                  Share the Profits When the House Sells
                </dd>
              </dl>
              <div
                className={width > 700 ? "center" : ""}
                style={{ marginBottom: "50px" }}
              >
                <Link to="/sign-up" className="link btn-sm white-outline">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
          <div className="option-card">
            <div style={{ margin: "0px 20px" }}>
              <p className="option-text">
                <span className="hero"> Partner</span>
                <br />
                <span>Flip Your Property Now.</span>
              </p>
              <dl style={{ marginBottom: "30px" }}>
                <dd>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: `var(--magenta)`,
                    }}
                  >
                    |
                  </span>{" "}
                  List a House to be Developed
                </dd>
                <dd>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: `var(--sun)`,
                    }}
                  >
                    |
                  </span>{" "}
                  Investors Fund the Renovations
                </dd>
                <dd>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: `var(--magenta)`,
                    }}
                  >
                    |
                  </span>{" "}
                  Quickly Develop Your Properties
                </dd>
              </dl>
              <div
                className={width > 700 ? "center" : ""}
                style={{ marginBottom: "50px" }}
              >
                <Link to="/sign-up" className="link btn-sm white-outline">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "90px" }}>
        <LocationBars />
      </div>
      <CallToAction />
    </>
  );
}
