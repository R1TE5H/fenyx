import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "../styles/main.css";

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
            <div className="rows" style={{ gap: "10px" }} key={index}>
              <div style={{ width: "30px", height: "30px" }}>
                <svg
                  style={{ width: "20px", height: "20px" }}
                  clipRule="evenodd"
                  fillRule="evenodd"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_14090371"
                >
                  <g id="图层_x0020_1">
                    <path d="m0 0h21v21h-21z" fill="none"></path>
                    <path
                      d="m10.5038 1.31775c5.07328 0 9.1876 4.11432 9.1876 9.1876s-4.11432 9.1876-9.1876 9.1876-9.1876-4.11432-9.1876-9.1876 4.11432-9.1876 9.1876-9.1876zm-1.90792 12.1718-2.24935-2.25121c-.38321-.38344-.38329-1.00872 0-1.39208.38337-.38329 1.01143-.38089 1.39201 0l1.58578 1.58702 3.94488-3.94488c.38337-.38337 1.00872-.38337 1.39201 0 .38337.38329.38282 1.00918 0 1.39201l-4.64201 4.64201c-.38282.38282-1.00872.38337-1.39201 0-.01077-.01077-.02116-.0217-.03131-.03286z"
                      fill={`${
                        index % 2 === 0 ? `var(--sun)` : `var(--magenta)`
                      }`}
                    ></path>
                  </g>
                </svg>
              </div>
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
