import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/header";
import Login from "./pages/login";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/Home";

import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("SOA"));
    axios
      .post(`http://localhost:4004/login`, data)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <Header />
        <div>
          <h1>loading......</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
