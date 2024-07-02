import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Assuming the CSS styles are saved in a separate file
import Cookies from "js-cookie";

const AuthForm = ({ FormType }) => {
  const [isActive, setIsActive] = useState(FormType !== "Log In");

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleFormSubmitLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const requestBody = {
      grant_type: "",
      username: formData.get("email"),
      password: formData.get("password"),
      scope: "",
      client_id: "",
      client_secret: "",
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/token",
        new URLSearchParams(requestBody).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      );

      const accessToken = response.data.access_token;
      Cookies.set("access_token", accessToken);
      window.location.href = "/Dashboard";
    } catch (error) {
      alert("Login failed:", error.message);
    }
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
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.data.access_token) {
        const { access_token } = response.data;

        // Store the access token in cookies
        Cookies.set("access_token", access_token, { expires: 7 }); // Example: set cookie to expire in 7 days

        console.log("Registration successful. Access token:", access_token);

        // Redirect to /Register/Avatar after successful registration
        window.location.href = "/Register/Avatar";
      } else {
        console.error("Access token not found in response:", response.data);
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      alert("Registration failed:", error.message);
    }
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
          <input
            className="text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="text-black"
            type="password"
            placeholder="Password"
            name="password"
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
