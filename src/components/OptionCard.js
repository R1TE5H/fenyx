import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "../styles/main.css";
import { FaCheckCircle } from "react-icons/fa";

export default function OptionCard({ title, description, points }) {
  return (
    <>
      <div
        style={{
          height: "fit-content",
          width: "300px",
          padding: "20px",
          borderRadius: "20px",
          background: `var(--smoke)`,
          outline: `1px solid var(--white)`,
        }}
      >
        <div style={{ margin: "20px 15px" }}>
          <p className="medium-text">{title}</p>
          <p style={{ color: `var(--light_grey)`, lineHeight: "25px" }}>
            {description}
          </p>
        </div>
        <div style={{ margin: "20px 15px" }}>
          {points.map((point, index) => (
            <div className="rows" style={{ gap: "20px" }} key={index}>
              <FaCheckCircle
                size={20}
                color={`${index % 2 === 0 ? `var(--sun)` : `var(--magenta)`}`}
              />
              <p>{point}</p>
            </div>
          ))}
        </div>

        <div className="center" style={{ marginBottom: "20px" }}>
          <Link
            to="/sign-up"
            className="btn-lg white-outline link"
            style={{ borderRadius: "10px" }}
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </>
  );
}
