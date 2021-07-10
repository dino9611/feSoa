import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dataUser = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onLoginClick = () => {
    console.log(data);
    axios
      .post(`http://localhost:4004/login`, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("SOA", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  if (dataUser.islogin) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "90vh" }}
    >
      <div
        className="px-5 py-4 shadow-lg "
        style={{ height: "45vh", width: "30%" }}
      >
        <h1 className="my-4">Login</h1>
        <div className="my-2">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={onInputChange}
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={onInputChange}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={onLoginClick}>
          Login
        </button>
        <div className="mt-3">
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
