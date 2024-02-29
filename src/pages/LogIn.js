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

export default function LogIn() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string().required().min(3).max(100).label("Email"),
    password: Joi.string().required().min(8).max(255).label("Password"),
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

      {width > 960 ? (
        <div className="rows">
          <FadingSwiper />
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
            <form onSubmit={handleSubmit(onSubmit)} className="columns form">
              <div className="columns">
                <label htmlFor="email">EMAIL</label>
                <input
                  className="input-lg"
                  {...register("email")}
                  id="email"
                  type="email"
                />
              </div>
              <div className="columns">
                <label htmlFor="password">PASSWORD</label>
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
              {errors && (
                <div className="center">
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </div>
              )}
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
      ) : (
        <div
          className="section center columns"
          style={{ marginTop: "120px", marginBottom: "10%" }}
        >
          <p style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="hero">Log In</span>
            <br />{" "}
            <span
              className="medium-text"
              style={{ color: `var(--light_grey)` }}
            >
              New to FENYX? Create an account
            </span>
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
            style={{ width: "70%", minWidth: "270px" }}
          >
            <div className="columns">
              <label htmlFor="email">EMAIL</label>
              <input
                className="input-lg"
                {...register("email")}
                id="email"
                type="email"
              />
            </div>
            <div className="columns">
              <label htmlFor="password">PASSWORD</label>
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
            {errors && (
              <div className="center">
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
              </div>
            )}
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
      )}
    </>
  );
}
