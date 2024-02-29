import React from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import CallToAction from "../components/CallToAction";

export default function HowItWorks() {
  return (
    <>
      <div className="center header columns" style={{}}>
        <p style={{ textAlign: "center" }}>
          <span className="header-text">Upgrade the World.</span>
          <br />
          <br />
          <span className="medium-text">Here's How It Works.</span>
        </p>
        <Link
          className="link gradient-bg btn-lg"
          style={{ position: "relative" }}
        >
          CREATE ACCOUNT
        </Link>
      </div>

      <div className="section">
        <p className="hero">Precision and Expertise</p>
        <p className="medium-text">
          We meticulously analyze market trends, evaluate the property's
          location, and anticipate the optimal return on investment. Your
          investment is not just secured; it's strategically enhanced for
          unparalleled success. Sit back, relax, and watch your property
          flourish under our expert care.
        </p>
      </div>
      <div className="section ">
        <p className="hero">Complete Transparency</p>
        <p className="medium-text">
          Our team engages directly with contractors to obtain detailed
          estimates for each project. We not only provide a detailed breakdown
          of renovation costs with comprehensive justifications for every
          expense, and provide a reliable timeline estimate, keeping investors
          and partners informed and empowered throughout the entire renovation
          process. It's not just about estimates; it's about fostering trust and
          providing a clear roadmap to success.
        </p>
      </div>
      <div className="section ">
        <p className="hero">Effortless</p>
        <p className="medium-text">
          The power to invest is just a click away. Seamlessly navigate our
          projects and with a simple click, invest in a project. We believe in
          empowering investors with the ease and convenience they deserve,
          ensuring a seamless and efficient real estate investment experience.
        </p>
      </div>
      <div className="section ">
        <p className="hero">Follow Along</p>
        <p className="medium-text">
          Watch your investment unfold in real-time with daily or weekly
          updates, complete with captivating time-lapse visuals highlighting
          each accomplished milestone. Follow along to ensure every success is
          shared, and every accomplishment is celebrated together."
        </p>
      </div>
      <div className="section ">
        <p className="hero">Unveiling</p>
        <p className="medium-text">
          Your success is our priority. Our commitment to strategic property
          sales goes beyond the transaction. We go above and beyond, meeting
          with potential buyers and collaborating closely with top-tier realtors
          to secure not just good but the best offers for your property.
        </p>
      </div>
      <div className="section ">
        <p className="hero">Massive Returns</p>
        <p className="medium-text">
          Investors and Partners receive a percentage based on their invaluable
          contribution to the flip. Your prosperity is our priority, and our
          profit-sharing structure ensures that everyone enjoys a fair and
          proportionate slice of the success they helped create.
        </p>
      </div>
      <CallToAction />
    </>
  );
}
