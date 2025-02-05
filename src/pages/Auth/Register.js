import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "./../../firebase-config";

function Register(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setLoggedUser } = props;
  const { setLoginInUse } = props;

  const usersCollectionRef = collection(db, "users");

  const registerUser = async (event) => {
    event.preventDefault();
    await getDocs(query(usersCollectionRef, where("email", "==", email))).then(
      (output) => {
        if (output.empty) {
          addDoc(usersCollectionRef, { email: email, password: password })
            .then((output) => {
              setLoggedUser(output.id);
              setLoginInUse(false);
              window.alert("uspesna registracia");
            })
            .catch((e) => {
              window.alert("kratke heslo");
            });
        } else {
          window.alert("email sa pouziva");
        }
      }
    );
  };

  return (
    <form className="d-flex flex-column" onSubmit={registerUser}>
      <b>E-mail</b>
      <input
        type="email"
        placeholder="Enter E-mail"
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <b>Password</b>
      <input
        type="password"
        placeholder="Enter Password"
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        className="auth-login-button"
        type="submit"
        value="Register"
      ></input>
      {/* <div>
        <input type="checkbox" name="remember" /> Remember me
      </div> */}
    </form>
  );
}

export default Register;
