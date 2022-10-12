import { Link, Outlet } from "react-router-dom";

function Product(props) {
  return (
    <div className="product-wrapper">
      <img
        className="product"
        src={require("../assets/men/clothing/holder.jpeg")}
      ></img>
      <div>
        <div className="product-text">nazov</div>
        <div className="product-text">cena</div>
      </div>
    </div>
  );
}

export default Product;
