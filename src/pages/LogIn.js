import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import "../styles/forms.css";
import "../styles/main.css";
import FadingSwiper from "../components/FadingSwiper";
import useWindowDimensions from "./../services/windowSize";
import Label from "../components/Forms";

export default function LogIn() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .min(3)
      .max(100)
      .label("Email")
      .messages({
        "string.empty": `Email is required.`,
        "string.email": `Please provide a valid email.`,
      }),
    password: Joi.string()
      .required()
      .min(8)
      .max(255)
      .label("Password")
      .messages({
        "string.empty": `Password is required.`,
        "string.min": `Minimum 8 characters long.`,
        "string.max": "Maximum 255 characters long.",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  // ! Posting Login to Server
  const loginUser = (data) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        console.log("JWT:", res.data);
        navigate("/blogs");
      })
      .catch((err) => {
        toast.error("Invalid Email or Password", {
          style: {
            marginTop: "20px",
            color: `var(--white)`,
            background: `var(--smoke)`,
          },
        });
        console.log("Error:", err);
      });
  };

  const onSubmit = (data) => loginUser(data);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="rows center">
        {width > 960 && <FadingSwiper />}
        <div className="columns center" style={{ padding: "0px 10%" }}>
          <p style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="hero">Log In</span>
            <br />{" "}
            <span
              className="medium-text"
              style={{ color: `var(--light_grey)` }}
            >
              New to FENYX? Create an account
            </span>{" "}
            <Link
              to="/sign-up"
              className="link medium-text"
              style={{ color: `var(--white)` }}
            >
              here.
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="columns form"
            style={{ width: "70%" }}
          >
            <div className="columns">
              <Label name="EMAIL" errors={errors.email} />
              <input
                className="input-lg"
                {...register("email")}
                id="email"
                type="email"
              />
            </div>
            <div className="columns">
              <Label name="PASSWORD" errors={errors.password} />
              <input
                className="input-lg"
                {...register("password")}
                id="password"
                type="password"
              />
            </div>
            <Link
              to="#"
              className="link"
              style={{ color: `var(--grey)`, fontSize: "small" }}
            >
              FORGOT PASSWORD
            </Link>

            <div className="btn-container center">
              <button
                className="btn-lg link gradient-bg"
                style={{ border: "none", cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
