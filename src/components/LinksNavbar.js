import { Link, useLocation } from "react-router-dom";

function PrimaryNavbar(props) {
  const { links } = props;
  const { linkLevel } = props;
  const location = useLocation();

  return (
    <nav className="homeNavbar">
      {links.map((element) => {
        return (
          <Link
            to={element.link}
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

export default PrimaryNavbar;
