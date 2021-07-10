import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
const Register = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "90vh" }}
    >
      <div
        className="px-5 py-4 shadow-lg "
        style={{ height: "50vh", width: "30%" }}
      >
        <h1 className="my-4">Register</h1>
        <div className="my-2">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="username"
          />
        </div>
        <div className="my-2">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
          />
        </div>
        <button className="btn btn-primary mt-2">Register</button>
        <div className="my-2">
          <Link to="/login" style={{ textDecoration: "none" }}>
            login ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
