import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

function App() {
  // const welcomeMessages = ["in React", "in C#", "in JS"]

  // const [actualValue, setActualValue] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setActualValue((actualValue + 1) % 3)
  //   }, 2000)
  // })

  // <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/first">First</Link>
  //           </li>
  //           <li>
  //             <Link to="/second">Second</Link>
  //           </li>
  //           <li>
  //             <Link to="/third">Third</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <Routes>
  //         <Route path="/first" element = {<First />}>
  //         </Route>
  //         <Route path="/second" element = {<Second />}>
  //         </Route>
  //         <Route path="/third" element = {<Third />}>
  //         </Route>
  //         <Route path="/" element = {<Second />}>
  //         </Route>
  //       </Routes>
  //     </div>
  //   </Router>
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/men" element={<Men />}></Route>
          <Route path="/men/clothing" element={<MenClothing />}></Route>
          <Route path="/men/shoes" element={<MenShoes />}></Route>

          <Route path="/women" element={<Women />}></Route>
          <Route path="/women/clothing" element={<WomenClothing />}></Route>
          <Route path="/women/shoes" element={<WomenShoes />}></Route>

          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/kids/clothing" element={<KidsClothing />}></Route>
          <Route path="/kids/shoes" element={<KidsShoes />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
