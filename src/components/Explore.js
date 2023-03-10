import React from 'react'
import { Link } from 'react-router-dom'
import './css/Explore.css'
import glassbox2 from './img/glassbox2.png'
import ball2 from './img/ball2.png'
import thevoid from './img/void.png'

const navStyle = {textDecoration: "none", color: "whitesmoke", backgroundColor: "transparent", border: "none"};

function Explore() {
  return (
    <div className='explore-page'>
        <video src='/HomePageBG2.mp4' autoPlay loop muted className='explore-vid'/> 
        <h1 className='explore-header'>choose your destination</h1>
        <h3 className='explore-sub-header'>a rip in the fabric of time and space where visitors can travel to different eras and dimensions</h3>
        <div className='boxes'>
            <div className='box'>
                <div>
                    <Link to="/skyasylum">
                        <img src={glassbox2} alt="sky asylum"  className='explore-img'/>
                            <p className="box-text"><Link style={navStyle}>SKY ASYLUM</Link></p>
                    </Link>
                </div>
                <div>
                    <Link to="/glacia">
                        <img src={ball2} alt="glacia"  className='explore-img'/>
                            <p className="box-text"><Link style={navStyle}>GLACIA</Link></p>
                    </Link>                
                </div>
                <div>
                    <Link to="/void">
                        <img src={thevoid} alt="void" className='explore-img' />
                            <p className="box-text"><Link style={navStyle}>THE VOID</Link></p>
                    </Link>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore