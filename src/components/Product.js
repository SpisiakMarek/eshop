import { Link, Outlet } from "react-router-dom";

function Product(props) {
  const { data } = props;
  console.log(data);

  return (
    <div className="product-wrapper">
      <img className="product" src={data.image}></img>
      <div>
        <div className="product-text">{data.name}</div>
        <div className="product-text">{data.price}</div>
      </div>
    </div>
  );
}

export default Product;
