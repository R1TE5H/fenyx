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
import Label from "../components/Forms";

export default function SignUp() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const schema = Joi.object({
    first_name: Joi.string()
      .required()
      .min(3)
      .max(100)
      .label("First Name")
      .messages({
        "string.empty": "First name is required.",
        "string.min": "Minimum 3 characters long.",
        "string.max": "Maximum 100 characters long.",
      }),
    last_name: Joi.string()
      .required()
      .min(3)
      .max(100)
      .label("Last Name")
      .messages({
        "string.empty": "Last name is required.",
        "string.min": "Minimum 3 characters long.",
        "string.max": "Maximum 100 characters long.",
      }),
    phone: Joi.string()
      .required()
      .min(10)
      .max(15)
      .label("Phone Number")
      .messages({
        "string.empty": "Phone number is required.",
        "string.min": "Minimum 10 digits long.",
        "string.max": "Maximum 15 digits long.",
      }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
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

      <div className="rows center">
        {width > 960 && <FadingSwiper />}
        <div className="columns center" style={{ padding: "0px 10%" }}>
          <p
            style={{
              textAlign: "center",
              marginBottom: "60px",
              marginTop: ` ${width > 960 ? "0px" : "100px"}`,
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="columns form"
            style={{ width: "70%" }}
          >
            <div className="columns">
              <Label name="FIRST NAME" errors={errors.first_name} />
              <input
                className="input-lg"
                {...register("first_name")}
                id="first name"
                type="text"
              />
            </div>
            <div className="columns">
              <Label name="LAST NAME" errors={errors.last_name} />
              <input
                className="input-lg"
                {...register("last_name")}
                id="last name"
                type="text"
              />
            </div>

            <div className="columns">
              <Label name="PHONE NUMBER" errors={errors.phone} />
              <input
                className="input-lg"
                {...register("phone")}
                id="phone"
                type="tel"
              />
            </div>
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
              <Label name="PASSWORD" errors={errors.password} />{" "}
              <input
                className="input-lg"
                {...register("password")}
                id="password"
                type="password"
              />
            </div>
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
