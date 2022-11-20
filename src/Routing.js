import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";

import Home from "./pages/Home";
import Kids from "./pages/Kids";
import KidsClothing from "./pages/Kids/KidsClothing";
import KidsShoes from "./pages/Kids/KidsShoes";
import Men from "./pages/Men";
import MenClothing from "./pages/Men/MenClothing";
import MenShoes from "./pages/Men/MenShoes";
import Women from "./pages/Women";
import WomenClothing from "./pages/Women/WomenClothing";
import WomenShoes from "./pages/Women/WomenShoes";

import Header from "./Header";

import Auth from "./pages/Auth";

import UserMenu from "./pages/UserMenu";

function App() {
  const [loginInUse, setLoginInUse] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const handleSetLoginInUse = (input) => {
    setLoginInUse(input);
  };
  const links = [
    {
      link: "men",
      text: "Men",
      src: require("./assets/productsNavbar/men.jpg"),
    },
    {
      link: "women",
      text: "Women",
      src: require("./assets/productsNavbar/women.jpg"),
    },
    {
      link: "kids",
      text: "Kids",
      src: require("./assets/productsNavbar/kids.jpg"),
    },
  ];

  return (
    <div>
      {loginInUse && !loggedUser ? (
        <Auth
          handleSetLoginInUse={handleSetLoginInUse}
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
        />
      ) : null}
      {loginInUse && loggedUser ? (
        <UserMenu
          handleSetLoginInUse={handleSetLoginInUse}
          loggedUser={loggedUser}
          setLoginInUse={setLoginInUse}
          userName={loggedUser}
        />
      ) : null}
      <Header handleSetLoginInUse={handleSetLoginInUse} />
      <HomeNavbar links={links} linkLevel={1} />
      <Routes>
        <Route path="/" element={<Home links={links} />}></Route>

        <Route path="/men" element={<Men />}>
          <Route path="clothing" element={<MenClothing />}></Route>
          <Route path="shoes" element={<MenShoes />}></Route>
        </Route>

        <Route path="/women" element={<Women />}>
          <Route path="clothing" element={<WomenClothing />}></Route>
          <Route path="shoes" element={<WomenShoes />}></Route>
        </Route>

        <Route path="/kids" element={<Kids />}>
          <Route path="clothing" element={<KidsClothing />}></Route>
          <Route path="shoes" element={<KidsShoes />}></Route>
        </Route>

        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
