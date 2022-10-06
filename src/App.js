
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
    <div>Hello World</div>
  );
}

export default App;
