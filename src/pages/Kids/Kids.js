import { Link } from "react-router-dom";

function Kids() {
  return (
    <ul>
      <li>
        <Link to="/kids/clothing">Clothing</Link>
      </li>
      <li>
        <Link to="/kids/shoes">Shoes</Link>
      </li>
    </ul>
  );
}

export default Kids;
