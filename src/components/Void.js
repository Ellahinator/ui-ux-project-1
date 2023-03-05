import React from 'react';
import { Link } from 'react-router-dom';
import './css/Void.css';
import artgallery from './img/voidart.png';
import retreat from './img/voidretreat.png';
import leftarrow from './img/leftarrow.png';

function Void() {
  return (
    <div className='void-page'>
      <h1 className='void-header'>THE VOID</h1>
      <div className='void-content'>
        <div className='void-boxes'>
          <div className='void-box'>
            <img src={artgallery} alt="void art gallery" className='void-img'/>
            <p className='sub-text'>art gallery</p>
            <p className='void-text'> 
            This gallery features artwork that explores the theme of ephemerality, showcasing works that are temporary, fleeting, and impermanent. Visitors can experience the beauty and transience of these artworks, and reflect on the impermanence of life itself
            </p>
          </div>
          <div className='void-box'>
            <img src={retreat} alt="retreat" className='void-img'/>
            <p className='sub-text'>non-existence retreat</p>
            <p className='void-text'>            
            This retreat offers visitors a chance to disconnect from the pressures of daily life and embrace the concept of non-existence. Visitors can practice mindfulness, meditation, and yoga, and explore the natural beauty of the surrounding wilderness.            </p>
          </div>
        </div>
      </div>
      <div className='arrow-box'>
        <Link to="/glacia" className='arrow-link'>
          <div className='arrow-left'>
            <img src={leftarrow} alt="leftarrow" className='arrow-img'/>
            <span className='arrow-text'>glacia</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Void;
