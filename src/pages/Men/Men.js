import { Link } from "react-router-dom";

function Men() {
  return (
    <ul>
      <li>
        <Link to="/men/clothing">Clothing</Link>
      </li>
      <li>
        <Link to="/men/shoes">Shoes</Link>
      </li>
    </ul>
  );
}

export default Men;
