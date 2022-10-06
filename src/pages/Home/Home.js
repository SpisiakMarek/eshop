import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>}></Route>
    </Routes>
  );
}

export default Home;
