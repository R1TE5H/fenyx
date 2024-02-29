import React from "react";
import { Link } from "react-router-dom";
import CallToAction from "./../components/CallToAction";

export default function WhyHouses() {
  return (
    <>
      <div className="header center columns">
        <p style={{ textAlign: "center" }}>
          <span className="header-text">Real Estate Explained.</span>
          <br /> <br />
          <span className="medium-text">
            Learn why real estate outshines traditional investments.
          </span>
          <br />
        </p>
        <div className="center btn-container">
          <Link className="link gradient-bg btn-lg" to="/sign-up">
            GET STARTED
          </Link>
        </div>
        <br />
      </div>
      <div className="section">
        <p>
          <span className="hero">
            Massive{" "}
            <span
              style={{
                textDecoration: "line-through",
                textDecorationColor: `var(--magenta)`,
              }}
            >
              Returns
            </span>{" "}
            Fortunes
          </span>
        </p>
        <p className="medium-text">
          In the dynamic world of investments, real estate consistently
          outshines traditional investments. Over a 6-month period, real estate
          has proven to yield substantially larger returns compared to its stock
          market counterparts.
        </p>
        <p className="medium-text">
          House flipping, introduces a strategic approach to investment. By
          identifying undervalued properties, making strategic renovations, and
          capitalizing on market demand, house flipping presents a hands-on
          method to amplify returns within a shorter time frame.
        </p>
      </div>
      <div className="section">
        <p className="hero">Beat Inflation, Defy Recession</p>
        <p className="medium-text">
          Real Estate is <span style={{ color: `var(--sun)` }}>Scarce</span>.
          Its limited availability prevents it from being diluted, not only
          protecting your investment but enhancing its appreciation potential.
        </p>
        <p className="medium-text">
          Real estate is{" "}
          <span style={{ color: `var(--magenta)` }}>Tangible</span>. The
          intrinsic value of owning a physical asset, coupled with the potential
          property appreciation, provides a level of control and stability that
          goes beyond the intangibility of stocks.
        </p>
        <p className="medium-text">
          Real Estate is <span style={{ color: `var(--sun)` }}>Stable</span>.
          Unlike volatile markets, real estate offers enduring value, acting as
          a robust foundation for long-term financial security.
        </p>
      </div>
      <div className="section">
        <p className="hero">Diversify and Conquer</p>
        <p className="medium-text">
          Diversification is crucial for a sound investment portfolio. Real
          estate offers a unique avenue to diversify your portfolio, spreading
          risk across different asset classes. Whether you're a seasoned
          investor or just starting, the ability to diversify within the real
          estate market provides a resilient buffer against market
          uncertainties.
        </p>
      </div>
      <CallToAction />
    </>
  );
}
