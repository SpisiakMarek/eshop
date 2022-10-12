import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Register() {
  return (
    <>
      <b>E-mail</b>
      <input type="text" placeholder="Enter E-mail" required />
      <b>Password</b>
      <input type="password" placeholder="Enter Password" required />
      <b>Username</b>
      <input type="text" placeholder="Enter Username" required />
      <button className="auth-login-button" type="submit">
        Register
      </button>
      <div>
        <input type="checkbox" name="remember" /> Remember me
      </div>
    </>
  );
}

export default Register;
