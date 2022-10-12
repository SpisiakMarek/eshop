import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import PrimaryNavbar from "./components/LinksNavbar";

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

function App() {
  const links = [
    {
      link: "men",
      text: "Men",
    },
    {
      link: "women",
      text: "Women",
    },
    {
      link: "kids",
      text: "Kids",
    },
  ];

  return (
    <div>
      <Header />
      <PrimaryNavbar links={links} linkLevel={1} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

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
