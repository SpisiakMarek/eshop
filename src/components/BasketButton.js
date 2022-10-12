import { Link, Outlet } from "react-router-dom";

function BasketButton() {
  return (
    <button
      className="fa-solid fa-basket-shopping text-white bg-transparent"
      onClick={() => {
        console.log("kosik");
      }}
    ></button>
  );
}

export default BasketButton;
