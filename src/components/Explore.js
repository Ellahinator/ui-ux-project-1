import React from 'react'
import { Link } from 'react-router-dom'
import './css/Explore.css'
import glassbox1 from './img/glassbox1.png'
import glassbox2 from './img/glassbox2.png'
import ball1 from './img/ball1.png'
import ball2 from './img/ball2.png'
import timerift from './img/timerift.png'

const navStyle = {textDecoration: "none", color: "whitesmoke", backgroundColor: "transparent", border: "none"};

function Explore() {
  return (
    <div className='explore-page'>
        <video src='/HomePageBG2.mp4' autoPlay loop muted className='explore-vid'/> 
        <h1 className='explore-header'>choose your destination</h1>
        <div className='boxes'>
            <div className='box'>
                <div>
                    <Link to="/skyasylum">
                        <img src={glassbox2} alt="sky asylum" />
                            <p className="box-text"><Link style={navStyle}>SKY ASYLUM</Link></p>
                    </Link>
                </div>
                <div>
                    <Link to="/glacia">
                        <img src={ball2} alt="glacia" />
                            <p className="box-text"><Link style={navStyle}>GLACIA</Link></p>
                    </Link>                
                </div>
                <div>
                    <Link to="/timerift">
                        <img src={timerift} alt="timerift" />
                            <p className="box-text"><Link style={navStyle}>THE TIME RIFT</Link></p>
                    </Link>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore