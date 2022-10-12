import { Link, useLocation } from "react-router-dom";

function HomeNavbar(props) {
  const { links } = props;
  const { linkLevel } = props;
  const location = useLocation();

  return (
    <nav className="home-navbar">
      {links.map((element) => {
        return (
          <Link
            to={element.link}
            className={"home-navbar-link"}
            style={{
              textDecoration:
                location.pathname.split("/")[linkLevel] == element.link
                  ? "underline"
                  : "none",
            }}
          >
            {element.text}
          </Link>
        );
      })}
    </nav>
  );
}

export default HomeNavbar;
