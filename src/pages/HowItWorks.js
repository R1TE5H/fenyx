import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import useWindowDimensions from "../services/windowSize";
import "../styles/main.css";

export default function HowItWorks() {
  const [number, setNum] = useState(0);
  const ref = useRef(null);
  const { width } = useWindowDimensions();

  const person = [
    {
      name: "Investors",
      description:
        "You are ready to invest in house flipping projects and start building your wealth.",
      number: 1,
      steps: [
        {
          header: "Create an Account",
          text: `Create an account to join our community of investors. Once registered browse through detailed project information, financial forecasts, and potential returns. Then choose the projects that align best with your investment goals and start investing for as little as $100.`,
        },
        {
          header: "Stay Informed",
          text: `Receive regular updates on the progress of your investments. Our transparent reporting keeps you informed about project milestones, financial performance, and any relevant news.`,
        },
        {
          header: "Reap the Returns",
          text: `As projects reach completion, enjoy a share of the profits based on your investment. Our platform ensures a seamless and secure process for distributing returns to our valued investors.`,
        },
      ],
    },
    {
      name: "Partners",
      description:
        "You have a property ready to be flipped and want our help and expertise to do it.",
      number: 2,
      steps: [
        {
          header: "Connect with Us",
          text: `Apply to list a property with FENYX. Our team will assess the property and determine optimal upgrades. We'll discuss the terms, conditions, and mutual benefits, working towards a clear and agreed-upon partnership agreement.`,
        },
        {
          header: "Start Building",
          text: `Once the terms are finalized, we will list the property on our catalogue and allow investors to begin funding the project. As renovations begin to be funded our team will start building.`,
        },
        {
          header: "Reap the Rewards",
          text: `As the project concludes and profits are realized, enjoy a share of the financial success. Our partnership model ensures that success is shared equitably, fostering a long-term and prosperous collaboration.`,
        },
      ],
    },
  ];

  const handleShow = (num) => {
    setNum(num);
    console.log(number);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="center header columns">
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
        <div
          className={`center ${width > 700 ? "rows" : "columns"}`}
          style={{ gap: "50px", alignItems: "start" }}
        >
          {person.map((type, index) => (
            <div
              ref={ref}
              key={index}
              className="columns center"
              style={{
                width: `${width > 700 ? "400px" : "300px"}`,
                textAlign: "center",
              }}
            >
              <span className="header-text">{type.name}</span>
              <br />
              <span className="medium-text">{type.description}</span>
              <br />
              <button
                onClick={() => handleShow(type.number)}
                className="btn-lg link white-outline"
              >
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
      {person.map(
        (person, i) =>
          person.number === number && (
            <div className="section fadeIn" key={i}>
              {person.steps.map((section, index) => (
                <div
                  className="columns"
                  key={index}
                  style={{ marginBottom: "80px" }}
                >
                  <span
                    className="hero"
                    style={{
                      color: `${
                        index % 2 === 0 ? `var(--magenta)` : `var(--sun)`
                      }`,
                    }}
                  >
                    {section.header}
                  </span>
                  <br />
                  <span className="medium-text">{section.text}</span>
                </div>
              ))}
            </div>
          )
      )}
      <CallToAction />
    </>
  );
}
