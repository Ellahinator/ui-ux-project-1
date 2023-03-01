import './App.css';

import Homepage from './components/Homepage';
import Explore from './components/Explore';
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="explore" element={<Explore />} />
          {/* <Route path="lodging" element={<Lodging />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} /> */}



          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
const navStyle = {textDecoration: "none", color: "white"};
function Layout() {
  return (
    <div>
      <nav>
      <Link to="/" style={navStyle}>Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
      <div className='content'>
        <h2>Congratulations. You win $1,000,000!</h2>
        <p> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Click here to claim your prize!</a> </p>
      </div>
  );
}

