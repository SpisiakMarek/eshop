import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth(props) {
  const [state, setState] = useState("login");
  const { handleSetLoginInUse } = props;
  return (
    <>
      <div
        className="auth-background"
        onClick={() => handleSetLoginInUse(false)}
      />
      <div className="auth-container">
        <div className="auth-type-container">
          <button
            className={"auth-type-button"}
            style={{ borderBottom: state == "login" ? "solid" : "none" }}
            onClick={() => {
              setState("login");
            }}
          >
            Login
          </button>
          <button
            className={"auth-type-button"}
            style={{ borderBottom: state == "register" ? "solid" : "none" }}
            onClick={() => {
              setState("register");
            }}
          >
            Register
          </button>
        </div>
        {state == "login" ? <Login /> : <Register />}
      </div>
    </>
  );
}

export default Auth;
