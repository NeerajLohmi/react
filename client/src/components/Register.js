import React, { useEffect, useState } from "react";
import "../Assets/Style/login.css";
import axios from "axios";

import "../Assets/Style/form.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [userSignInDetails, setUserSignInDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setUserDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const containerr = document.querySelector(".containerr");
    containerr.classList.remove("sign-up-mode");
    axios.post(`http://localhost:5005/login`, userDetails).then((res) => {
      console.log("login", res);

      const data = res.data;
      navigate("/home", {
        state: {
          data,
        },
      });
    });
    console.log("signuser login", userDetails);
  };

  const signUp = () => {
    const containerr = document.querySelector(".containerr");
    containerr.classList.add("sign-up-mode");
  };

  const signUpHandler = (e) => {
    e.preventDefault();

    console.log(" if comdition");

    axios.post(`http://localhost:5005/add`, userSignInDetails).then((res) => {
      console.log("login", res);
      if (userSignInDetails.email !== "") {
      } else {
        console.log("else comdition");
      }
    });
  };

  const signhandleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setUserSignInDetails((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const signin = () => {
    const containerr = document.querySelector(".containerr");
    containerr.classList.remove("sign-up-mode");
  };

  return (
    <>
      <div className="containerr">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userDetails.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="btnn" id="sign-up-btnn" onClick={loginHandler}>
              Login
            </button>
            <p className="social-text">Or Sign in with social platform</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="account-text">
              Don't have an account?{" "}
              <a href="#" id="sign-up-btnn2">
                Sign up
              </a>
            </p>
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={userSignInDetails.username}
                onChange={signhandleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={userSignInDetails.email}
                onChange={signhandleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userSignInDetails.password}
                onChange={signhandleInputChange}
                required
              />
            </div>
            <button className="btnn" id="sign-up-btnn" onClick={signUpHandler}>
              Sign up
            </button>
            <p className="social-text">Or Sign in with social platform</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="account-text">
              Already have an account?{" "}
              <a href="#" id="sign-in-btnn2">
                Sign in
              </a>
            </p>
          </form>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Member of Brand?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                accusantium dolor, eos incidunt minima iure?
              </p>
              <button className="btnn" id="sign-in-btnn" onClick={signin}>
                Sign in
              </button>
            </div>
            <img src="signin.svg" alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>New to Brand?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                accusantium dolor, eos incidunt minima iure?
              </p>
              <button className="btnn" id="sign-up-btnn" onClick={signUp}>
                Sign up
              </button>
            </div>
            <img src="" alt="" className="image" />
          </div>
        </div>
      </div>
      {/* <button className="close-model3" onClick={() => setModel(!model)}>
        X
      </button> */}
      {/* <div onClick={() => setModel(!model)}>
        <i className="icon"></i>
      </div> */}
      {/* <ToastContainer className="Toastify__toast-container" /> */}
    </>
  );
};

export default Register;
