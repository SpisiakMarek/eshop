import { Link } from "react-router-dom";

function Women() {
  return (
    <ul>
      <li>
        <Link to="/women/clothing">Clothing</Link>
      </li>
      <li>
        <Link to="/women/shoes">Shoes</Link>
      </li>
    </ul>
  );
}

export default Women;
