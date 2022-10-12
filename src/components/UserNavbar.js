import { Link, Outlet } from "react-router-dom";

function UserNavbar() {
  return (
    <div className="userNavbar">
      <i class="fas fa-sign-in-alt">asd</i>
      <button
        className="bi bi-box-arrow-in-right"
        onClick={() => {
          console.log("kosik");
        }}
      ></button>
      <button
        onClick={() => {
          console.log("login");
        }}
      ></button>
    </div>
  );
}

export default UserNavbar;
