import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import "../../../css/log/Login.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // State hooks for form inputs
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "username") setInputUsername(value);
    if (name === "email") setInputEmail(value);
    if (name === "password") setInputPassword(value);
    if (name === "confirmPassword") setInputConfirmPassword(value);
  };

  const Register = async () => {
    try {
      const response = await fetch(
        "https://otthoradmin.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: inputUsername,
            email: inputEmail,
            password: inputPassword,
            timezone: "PP",
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        alert(data.message || "Registration successful!");
        // navigate("/Login");
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-form">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // stop default form submission
          Register();
        }}
      >
        <p className="p-page">
          <span>Signup</span> |{" "}
          <span onClick={() => navigate("/Login")}>Login</span>
        </p>
        <p className="warm-welcome-p">Ready to be an Otthor member</p>

        <label>Username</label>
        <div className="div-input">
          <input
            type="text"
            className="username-input"
            placeholder="Enter Username"
            onChange={handleValue}
            name="username"
            value={inputUsername}
          />
        </div>

        <label>Email</label>
        <div className="div-input">
          <input
            type="email"
            className="email-input"
            placeholder="Enter Email"
            onChange={handleValue}
            name="email"
            value={inputEmail}
          />
        </div>

        <label>Password</label>
        <div className="div-input">
          <input
            type="password"
            className="password-input"
            placeholder="Enter Password"
            onChange={handleValue}
            name="password"
            value={inputPassword}
          />
          <FontAwesomeIcon icon={faEyeLowVision} className="show-password-icon" />
        </div>

        <label>Confirm Password</label>
        <div className="div-input">
          <input
            type="password"
            className="password-input"
            placeholder="Confirm Password"
            onChange={handleValue}
            name="confirmPassword"
            value={inputConfirmPassword}
          />
        </div>

        <div className="div-input div-checkBox">
          <div>
            <input type="checkbox" />
          </div>
          <label>
            I agree to the <u style={{ color: "orange" }}>Terms & Conditions</u>
          </label>
        </div>

        <div className="div-input div-submit">
          <button type="submit">Register</button>
        </div>

        <p className="warm-welcome-p">
          Already a member?{" "}
          <u
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => navigate("/Login")}
          >
            Login
          </u>
        </p>
      </form>
    </div>
  );
};

export default Signup;
