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
  deleteDoc,
} from "firebase/firestore";
import { db } from "./../../firebase-config";

function UserMenu(props) {
  const { handleSetLoginInUse } = props;
  const { loggedUser } = props;
  const [changingPassword, setChangingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const { setLoggedUser } = props;

  const changePassword = async (event) => {
    event.preventDefault();
    const userDoc = doc(db, "users", loggedUser);
    await getDoc(userDoc).then((output) => {
      const data = output.data();
      if (data.password == oldPassword) {
        updateDoc(userDoc, { password: newPassword })
          .then(() => {
            setChangingPassword(false);
            window.alert("heslo uspesne zmenene");
          })
          .catch((e) => {
            window.alert("kratke heslo");
          });
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

  const deleteAccount = async () => {
    const userDoc = doc(db, "users", loggedUser);
    deleteDoc(userDoc);
    window.location.reload(true);
  };

  const logout = () => {
    handleSetLoginInUse(false);
    setLoggedUser(false);
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
        <button className="auth-login-button" onClick={logout}>
          Odhlasit
        </button>
        <button className="delete-account-button" onClick={deleteAccount}>
          Odstrániť účet
        </button>
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
