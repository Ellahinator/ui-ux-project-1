import './App.css';

import Homepage from './components/Homepage';
import Lodging from './components/Lodging';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';


import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="lodging" element={<Lodging />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} />



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
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/location">TBD</Link>
          </li>
        </ul>
      </nav> */}

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
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

