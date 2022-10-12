import { Link, Outlet } from "react-router-dom";
import UserNavbar from "./components/UserNavbar";

function Header(props) {
  const { handleSetLoginInUse } = props;
  return (
    <header className="main-header">
      <Link className="siteName" to="/">
        Eshop
      </Link>
      <UserNavbar handleSetLoginInUse={handleSetLoginInUse}></UserNavbar>
    </header>
  );
}

export default Header;
