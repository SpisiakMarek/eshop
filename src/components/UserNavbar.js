import { Link, Outlet } from "react-router-dom";
import BasketButton from "./BasketButton";
import LoginButton from "./LoginButton";

function UserNavbar(props) {
  const { handleSetLoginInUse } = props;
  return (
    <div className="userNavbar">
      <BasketButton />
      <LoginButton handleSetLoginInUse={handleSetLoginInUse} />
    </div>
  );
}

export default UserNavbar;
