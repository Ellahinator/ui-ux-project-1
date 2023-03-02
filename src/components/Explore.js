import React from 'react'
import './css/Explore.css'
import glassbox1 from './img/glassbox1.png'


function Explore() {
  return (
    <div className='main'>
        <h1 className='explore-header'>choose your destination</h1>
        <div className='boxes'>
            <div className='box'>
                <div>
                    <img src={glassbox1} alt="glassbox 1" />
                        <p>Location One</p>
                </div>
                <div>
                    <img src={glassbox1} alt="glassbox 2" />
                        <p>Location Two</p>
                </div>
                <div>
                    <img src={glassbox1} alt="glassbox 3" />
                        <p>Location Three</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore