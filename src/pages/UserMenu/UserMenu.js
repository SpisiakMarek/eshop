import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Auth(props) {
  const [state, setState] = useState("login");
  const { handleSetLoginInUse } = props;
  const { setLoggedUser } = props;
  return <div>userMenu</div>;
}

export default Auth;
