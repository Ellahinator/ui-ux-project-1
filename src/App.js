import './App.css';

import Homepage from './components/Homepage';
import Explore from './components/Explore';
import Glacia from './components/Glacia';
import SkyAsylum from './components/SkyAsylum';
import Void from './components/Void';
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="skyasylum" element={<SkyAsylum />} />
          <Route path="glacia" element={<Glacia />} />
          <Route path="void" element={<Void />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
const navStyle = {textDecoration: "none", color: "white", top: 10, left: 10};
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={navStyle}>home</Link>
          </li>
          <li>
            <Link to="explore" style={navStyle}>explore</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
      <div className='content'>
        <h2>this page does not exist</h2>
      </div>
  );
}

