import React from "react";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getHospitalAuthState,
  getHospitalStatus,
  registerHospital,
} from "./hospitalSlice";
import "./HospitalRegister.css";
import hospRectImg from "./images/hosp_port_he.png";
import hospPortImg from "./images/hosp_port_img.png";
import logo from "./images/logo.png";

const HospitalRegister = () => {
  // const userRef = useRef();
  const navigate = useNavigate();
  const hospAuth = useSelector(getHospitalAuthState);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();

  const status = useSelector(getHospitalStatus);

  const canRegister = [email, pwd].every(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        registerHospital({
          hospitalName: name,
          hospitalEmail: email,
          hospitalPassword: pwd,
        })
      ).unwrap();
      setEmail("");
      setPwd("");
      setName("");
      navigate("/hospital/login", { replace: true });
    } catch (error) {
      console.log("An error occured when registering user - in component");
      console.log(error);
      setErrMsg(error.message);
    }
  };

  const content =
    status === "success" ? (
      <section>
        <Link to="/hospital/login">Login</Link>
      </section>
    ) : (
      <section className="hosp_register_form_container">
        <div className={errMsg ? "err" : "hide"}>
          <h1>{errMsg}</h1>
        </div>
        <form className="hosp_register_form" onSubmit={handleSubmit}>
          <img src={logo} className="logo" alt="logo" />
          <h1>Create an account</h1>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Hospital Name"
              value={name}
              required
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="pwd"
              placeholder="Password"
              id="pwd"
              value={pwd}
              required
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button disabled={!canRegister} className="hosp_register__button">
            Sign Up
          </button>
          <Link to="/hospital/login">Already have an account? Login</Link>
        </form>
      </section>
    );

  return hospAuth ? (
    <Navigate to="/hospital/options" replace />
  ) : (
    <div className="hospRegister">
      {content}
      <img className="hospImg" src={hospRectImg} alt="hosp_port_head" />
      <section className="hosp_register_heading">
        <h1>Hospital</h1>
        <h1>Registration!</h1>
      </section>
      <img src={hospPortImg} alt="hosp back" className="hospPortImg" />
    </div>
  );
};

export default HospitalRegister;
