import React from 'react'
import './css/Explore.css'
import glassbox1 from './img/glassbox1.png'


function Explore() {
  return (
    <div className='main'>
        <div className='boxes'>
            <div className='box'>
                <img src={glassbox1} alt="spongebob house" />
                <p>
                    Located at 124 Conch Street, this pineapple under the sea is an absolute gem!
                    The house is three stories high and fully furnished. There is a garage in the back of the house 
                    and two windows in the front. Out back of the house, the backyard is closed in by a square of flowers.
                    It also has an outdoor tap where a hose can be attached. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Explore