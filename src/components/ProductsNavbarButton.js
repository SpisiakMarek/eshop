import { Link, Outlet } from "react-router-dom";

function ProductsNavbarButton(props) {
  const { children } = props;
  const { imgSrc } = props;
  const { link } = props;
  return (
    <Link className="products-navbar-button" to={link}>
      <img src={imgSrc} className="products-navbar-button-image"></img>
      <p className="products-navbar-button-text">{children}</p>
    </Link>
  );
}

export default ProductsNavbarButton;
