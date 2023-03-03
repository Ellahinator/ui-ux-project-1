import React from 'react'
import { Link } from 'react-router-dom'
import './css/Explore.css'
import glassbox1 from './img/glassbox1.png'
import glassbox2 from './img/glassbox2.png'
import ball1 from './img/ball1.png'

const navStyle = {textDecoration: "none", color: "white", backgroundColor: "transparent", border: "none"};

function Explore() {
  return (
    <div className='explore-page'>
        <video src='/HomePageBG2.mp4' autoPlay loop muted className='explore-vid'/> 
        <h1 className='explore-header'>choose your destination</h1>
        <div className='boxes'>
            <div className='box'>
                <div>
                    <Link to="/tbd">
                        <img src={glassbox1} alt="glassbox 1" />
                            <p><Link style={navStyle}>Location One</Link></p>
                    </Link>
                </div>
                <div>
                    <Link to="/tbd">
                        <img src={ball1} alt="ball 1" />
                            <p><Link style={navStyle}>Location Two</Link></p>
                    </Link>                
                </div>
                <div>
                    <Link to="/tbd">
                        <img src={glassbox2} alt="glassbox 2" />
                            <p><Link style={navStyle}>Location Three</Link></p>
                    </Link>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore