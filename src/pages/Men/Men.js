import { Link, Outlet } from "react-router-dom";
import LinksNavbar from "../../components/LinksNavbar";

function Men(props) {
  const links = [
    {
      link: "clothing",
      text: "Clothing",
    },
    {
      link: "shoes",
      text: "Shoes",
    },
  ];

  return (
    <div>
      <LinksNavbar links={links} linkLevel={2} />

      <Outlet />
    </div>
  );
}

export default Men;
