import React from 'react'
import './css/Glacia.css'
import crystalcave from './img/crystalcave.png'
import glacia2 from './img/glacia2.png'

function Glacia() {
  return (
    <div className='glacia-page'>
        <h1 className='glacia-header'>GLACIA</h1>
        <div className='glacia-content'>
            <div className='glacia-boxes'>
                <div className='glacia-box'>
                    <img src={crystalcave} alt="crystal cave" className='glacia-img'/>
                    <p className='sub-text'>crystal cave</p>
                    <p className='glacia-text'>            Located at 124 Conch Street, this pineapple under the sea is an absolute gem!
            The house is three stories high and fully furnished. There is a garage in the back of the house 
            and two windows in the front. Out back of the house, the backyard is closed in by a square of flowers.
            It also has an outdoor tap where a hose can be attached. </p>
                </div>
                <div className='glacia-box'>
                    <img src={glacia2} alt="ephemeral" className='glacia-img'/>
                    <p className='sub-text'>ephemeral</p>
                    <p className='glacia-text'>            Located at 124 Conch Street, this pineapple under the sea is an absolute gem!
            The house is three stories high and fully furnished. There is a garage in the back of the house 
            and two windows in the front. Out back of the house, the backyard is closed in by a square of flowers.
            It also has an outdoor tap where a hose can be attached. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Glacia