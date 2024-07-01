import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Assuming the CSS styles are saved in a separate file

const AuthForm = ({ FormType }) => {
  const [isActive, setIsActive] = useState(FormType !== "Log In");

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const requestBody = {
      email: formData.get("email"),
      password: formData.get("password"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      gender: formData.get("gender"),
      dob: formData.get("dob"),
      country: formData.get("country"),
      lang_code: formData.get("lang_code"),
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      // Assuming a successful response is handled here
      alert("Registration successful:", response.data);
    } catch (error) {
      // Handle registration failure here (e.g., show an error message)
      alert("Registration failed:", error.message);
    }
    // Redirect to /Register/Avatar after successful registration
    window.location.href = "/Register/Avatar";
  };

  const handleFormSubmitLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const requestBody = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        "http://Localhost:8000/login",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      // Assuming a successful response is handled here
      alert("Login successful:", response.data);
    } catch (error) {
      // Handle login failure here (e.g., show an error message)
      alert("Login failed:", error.message);
    }
    // Redirect to /Dashboard after successful login
    window.location.href = "/Dashboard";
  };

  const containerClass = isActive ? "container active" : "container";

  return (
    <div className={containerClass} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleFormSubmit}>
          <h1 className="font-bold">Create Account</h1>
          <span>or use your email for registration</span>

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="text-black"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="text-black"
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            required
            className="text-black"
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            required
            className="text-black"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            className="text-black"
          />
          <input
            type="text"
            name="lang_code"
            placeholder="Language Code"
            required
            className="text-black"
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleFormSubmitLogin}>
          <h1 className="font-bold">Sign In</h1>
          <span>or use your email password</span>
          <input className="text-black" type="email" placeholder="Email" />
          <input
            className="text-black"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="font-bold">Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hiddenBg" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="font-bold">Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hiddenBg" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
