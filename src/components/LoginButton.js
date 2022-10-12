import { Link, Outlet } from "react-router-dom";

function LoginButton(props) {
  const { handleSetLoginInUse } = props;
  return (
    <button
      className="fa-solid fa-user   text-white bg-transparent"
      onClick={() => {
        handleSetLoginInUse(true);
      }}
    ></button>
  );
}

export default LoginButton;
