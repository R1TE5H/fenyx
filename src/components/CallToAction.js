import React from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";

export default function CallToAction() {
  return (
    <div className="section center columns">
      <div
        className="center"
        style={{
          minWidth: "300px",
          width: "50%",
        }}
      >
        <p style={{ textAlign: "center" }}>
          <span className="hero">The Future is Calling</span> <br />
          <span className="medium-text">
            Get Started Today and Change Your Life
          </span>
        </p>
      </div>

      <div className="center">
        <Link className="btn-lg link gradient-bg" to="/sign-up">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}
