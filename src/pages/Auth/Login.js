import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <>
      <b>Username</b>
      <input type="text" placeholder="Enter Username" required />
      <b>Password</b>
      <input type="password" placeholder="Enter Password" required />
      <button className="auth-login-button" type="submit">
        Login
      </button>
      <div>
        <input type="checkbox" name="remember" /> Remember me
      </div>
    </>
  );
}

export default Login;
