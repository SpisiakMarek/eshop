import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  connectFirestoreEmulator,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./../../firebase-config";

function UserMenu(props) {
  const { handleSetLoginInUse } = props;
  const { loggedUser } = props;
  const [changingPassword, setChangingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const usersCollectionRef = collection(db, "users");

  const changePassword = async (event) => {
    event.preventDefault();
    const userDoc = doc(db, "users", loggedUser);
    await getDoc(userDoc).then((output) => {
      const data = output.data();
      if (data.password == oldPassword) {
        updateDoc(userDoc, { password: newPassword });
        setChangingPassword(false);
        window.alert("heslo uspesne zmenene");
      } else {
        window.alert("zle heslo");
      }
      //   if (output.empty || output.docs[0].data().password != oldPassword) {
      //     window.alert("zle heslo");
      //   } else {
      //     console.log(output.docs[0].id);
      //     doc(db, "users", output.docs[0].id).then((output) => {
      //       console.log(output);
      //     });
      //     updateDoc(output.docs[0], { password: newPassword });
      //   }
    });
  };

  return (
    <>
      <div
        className="auth-background"
        onClick={() => handleSetLoginInUse(false)}
      />
      <div className="auth-container">
        <div className="auth-type-container">
          <b>Používateľské menu</b>
        </div>
        <button
          className="auth-login-button"
          onClick={() => setChangingPassword(!changingPassword)}
        >
          Zmeniť heslo
        </button>
        <button className="delete-account-button">Odstrániť účet</button>
        {changingPassword ? (
          <form className="d-flex flex-column" onSubmit={changePassword}>
            <b>Stare heslo</b>
            <input
              type="password"
              placeholder="Enter old password"
              required
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
            ></input>
            <b>Nove heslo</b>
            <input
              type="password"
              placeholder="Enter new password"
              required
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            ></input>
            <input
              className="auth-login-button"
              type="submit"
              value="Potvrdit zmenu"
            ></input>
          </form>
        ) : null}
      </div>
    </>
  );
}

export default UserMenu;
