import './css/Homepage.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import timerift from './img/timerift.png'

const navStyle = {textDecoration: "none", color: "white"};

function Homepage() {
  return (
    <div className="content">
      <video src='/HomePageBG.mp4' autoPlay loop muted/> 
      <div className="header">
      <h1>welcome to the tbd</h1>
      <h3> <Link style={navStyle} to = "/lodging"> click</Link></h3>
      <h3> <Link style={navStyle} to = "/lodging">ss</Link></h3>
      <img src={timerift} alt = "timerift" style={{float: 'right'}}/>
      </div>
    </div>
  );
}

export default Homepage;

