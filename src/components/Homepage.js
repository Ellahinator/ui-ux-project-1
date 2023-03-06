import './css/Homepage.css';
import { Link } from "react-router-dom";


const navStyle = {textDecoration: "none", color: "white"};

function Homepage() {
  return (
    <div className="content">
      <video src='/HomePageBG.mp4' autoPlay loop muted className='homepage-vid'/> 
      <div className="header">
      <h1>welcome to the time rift</h1>
      <h3> <Link style={navStyle} to = "/explore"> click here to explore</Link></h3>
      </div>
    </div>
  );
}

export default Homepage;

