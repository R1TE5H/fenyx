import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "../services/windowSize";
import FadingSwiper from "../components/FadingSwiper";

import "../styles/forms.css";
import "../styles/main.css";

export default function SignUp() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const schema = Joi.object({
    first_name: Joi.string().required().min(3).max(100).label("First Name"),
    last_name: Joi.string().required().min(3).max(100).label("Last Name"),
    phone: Joi.string().required().min(10).max(15).label("Phone Number"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().required().min(8).max(255).label("Password"),
  });
  const {
    register,
    handleSubmit,
    // To determine if the form is valid use isValid property
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  // ! Posting New User to Server
  const addUser = (data) => {
    axios
      .post("http://localhost:5000/sign-up", data)
      .then((res) => {
        console.log(res);
        navigate("/login");
        toast.success(`Welcome to FENYX ${data.first_name}`, {
          style: {
            marginTop: "20px",
            color: `var(--white)`,
            background: `var(--smoke)`,
          },
        });
      })
      .catch((err) => {
        if (err.response.data === "User already registered")
          toast.error("This user is already registered", {
            style: {
              marginTop: "20px",
              color: `var(--white)`,
              background: `var(--smoke)`,
            },
          });
        // setError(err.message);
        console.log("Error:", err);
      });
  };

  const onSubmit = (data) => addUser(data);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {width > 960 ? (
        <div className="rows ">
          <FadingSwiper />
          <div className="columns center" style={{ padding: "0px 10%" }}>
            <p
              style={{
                textAlign: "center",
                marginBottom: "60px",
              }}
            >
              <span className="hero">Create an Account</span>
              <br />
              <span
                className="medium-text"
                style={{ color: `var(--light_grey)` }}
              >
                Create an account and join our wait list or
              </span>{" "}
              <Link
                to="/login"
                className="link medium-text"
                style={{ color: `var(--white)` }}
              >
                Log in.
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="columns form">
              <div className="columns">
                <label htmlFor="first_name">FIRST NAME</label>
                <input
                  className="input-lg"
                  {...register("first_name")}
                  id="first_name"
                  type="text"
                />
              </div>
              <div className="columns">
                <label htmlFor="last_name">LAST NAME</label>
                <input
                  className="input-lg"
                  {...register("last_name")}
                  id="last_name"
                  type="text"
                />
              </div>

              <div className="columns">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  className="input-lg"
                  {...register("phone")}
                  id="phone"
                  type="tel"
                />
              </div>
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
              {errors && (
                <div className="rows" style={{ gap: "10px" }}>
                  <div>
                    {errors.first_name && (
                      <p style={{ color: "red" }}>
                        {errors.first_name.message}
                      </p>
                    )}
                    {errors.last_name && (
                      <p style={{ color: "red" }}>{errors.last_name.message}</p>
                    )}
                    {errors.phone && (
                      <p style={{ color: "red" }}>{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                  </div>
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
          style={{
            marginTop: "120px",
            marginBottom: "10%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <span className="hero ">Create an Account</span>
            <br />
            <span
              className="medium-text"
              style={{ color: `var(--light_grey)` }}
            >
              Create an account and automatically join our wait list or
            </span>{" "}
            <Link
              to="/login"
              className="link medium-text"
              style={{ color: `var(--white)` }}
            >
              Log in.
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="columns form"
            style={{ width: "70%", minWidth: "270px" }}
          >
            <div className="columns">
              <label htmlFor="first_name">FIRST NAME</label>
              <input
                className="input-lg"
                {...register("first_name")}
                id="first_name"
                type="text"
              />
            </div>
            <div className="columns">
              <label htmlFor="last_name">LAST NAME</label>
              <input
                className="input-lg"
                {...register("last_name")}
                id="last_name"
                type="text"
              />
            </div>

            <div className="columns">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                className="input-lg"
                {...register("phone")}
                id="phone"
                type="tel"
              />
            </div>
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
            {errors && (
              <div className="rows" style={{ gap: "10px" }}>
                <div>
                  {errors.first_name && (
                    <p style={{ color: "red" }}>{errors.first_name.message}</p>
                  )}
                  {errors.last_name && (
                    <p style={{ color: "red" }}>{errors.last_name.message}</p>
                  )}
                  {errors.phone && (
                    <p style={{ color: "red" }}>{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </div>
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
