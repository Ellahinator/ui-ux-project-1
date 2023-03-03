import React from 'react'
import './css/Glacia.css'
import crystalcave from './img/crystalcave.png'

function Glacia() {
  return (
    <div className='glacia-page'>
        <h1 className='glacia-header'>GLACIA</h1>
        <div className='glacia-content'>
            <div className='glacia-box'>
                <div>
                    <img src={crystalcave} alt="crystal cave" />
                    <p className='glacia-text'>crystal cave</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Glacia