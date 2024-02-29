import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div className="section center columns header">
        <p style={{ textAlign: "center" }}>
          <span className="header-text">404 Error</span>
          <br />
          <span>
            We ran into an issue going to the page you are looking for.
          </span>
        </p>
        <Link to="/" className="link gradient-bg btn-lg">
          Back to Homepage
        </Link>
      </div>
    </>
  );
}
