import { Link, Outlet } from "react-router-dom";
import UserNavbar from "./components/UserNavbar";

function Header() {
  return (
    <header>
      <Link className="siteName" to="/">
        Eshop
      </Link>
      <UserNavbar></UserNavbar>
    </header>
  );
}

export default Header;
