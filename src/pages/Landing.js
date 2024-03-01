import React from "react";
import { Link } from "react-router-dom";
import pattern from "../assets/landingPattern.jpg";

import "../styles/main.css";
import "../styles/landing.css";
import BlogsSwiper from "../components/BlogsSwiper";
import useWindowDimensions from "../services/windowSize";
import LocationBars from "../components/LocationBars";
import CallToAction from "../components/CallToAction";
import OptionCard from "../components/OptionCard";

export default function Landing() {
  const { width } = useWindowDimensions();

  const stats = [
    {
      value: "29",
      name: "REAL ESTATE",
    },
    {
      value: "10",
      name: "S&P 500",
    },
    {
      value: "8",
      name: "MUTUAL FUNDS",
    },
  ];

  const benefits = [
    {
      header: "Fast",
      text: `House Flipping gets huge returns in a matter of months, enabling you to liquidate your gains quickly.`,
    },
    {
      header: "Scarce",
      text: `Real Estate's value cannot be diluted allowing it to maintain its scarcity, protecting your investment and enhancing its appreciation potential.`,
    },
    {
      header: "Stable",
      text: `Unlike volatile markets, real estate offers enduring value, acting as a robust foundation for long-term financial security.`,
    },
  ];

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
              Supercharge your portfolio. Invest in House Flips for as little as
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
          {stats.map((stat, index) => (
            <p className="columns" key={index}>
              <span className="gradient-text hero-stat">
                {stat.value}
                <span style={{ fontSize: "36px" }}>%</span>
              </span>
              <span className="stat-label">{stat.name}</span>
            </p>
          ))}
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
          {benefits.map((benefit, index) => (
            <div style={{ padding: "0px 10px" }} key={index}>
              <p className="columns">
                <span className="medium-text" style={{ fontWeight: "400" }}>
                  <span
                    style={{
                      fontSize: "30px",
                      color: `${
                        index % 2 === 0 ? `var(--sun)` : `var(--magenta)`
                      }`,
                    }}
                  >
                    |
                  </span>{" "}
                  {benefit.header}
                </span>
                <br />
                <span style={{ color: `var(--light_grey)` }}>
                  {benefit.text}
                </span>
              </p>
            </div>
          ))}
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
        <div
          className={`center ${width > 700 ? "rows" : "columns"}`}
          style={{ gap: "50px", alignItems: "start" }}
        >
          <OptionCard
            title={"Investor"}
            description={
              "Start your journey as a real estate flipper. Fund projects and watch your investments grow."
            }
            points={[
              "$100 minimum investments.",
              "Pick from a catalogue of projects.",
              "Share the profits when the house sells.",
            ]}
          />
          <OptionCard
            title={"Partner"}
            description={
              "Quickly fund your property renovations and grow your wealth."
            }
            points={[
              "Fund renovation projects.",
              "Optimize your real estate.",
              "Rapidly transform the property.",
            ]}
          />
        </div>
      </div>
      <div style={{ marginBottom: "90px" }}>
        <LocationBars />
      </div>
      <CallToAction />
    </>
  );
}
