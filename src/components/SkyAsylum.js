import React from 'react';
import { Link } from 'react-router-dom';
import './css/SkyAsylum.css';
import desert from './img/timerift.png';
import tree from './img/treebox.png';
import rightarrow from './img/rightarrow.png';

function SkyAsylum() {
  return (
    <div className='skyasylum-page'>
      <h1 className='skyasylum-header'>SKY ASYLUM</h1>
      <div className='skyasylum-content'>
        <div className='skyasylum-boxes'>
          <div className='skyasylum-box'>
            <img src={desert} alt="timeless gateway" className='skyasylum-img'/>
            <p className='sub-text'>timeless gateway</p>
            <p className='skyasylum-text'> 
                <span style={{color: '#ffdb6f'}}>Timeless Gateway</span> is a remarkable tourist location situated in the midst of a vast desert landscape. 
                Visitors enter through a towering archway adorned with Roman numerals, leading to a stunning scene 
                of intricate carvings, ornate mosaics, and towering columns that stretch towards the sky. Timeless 
                Gateway offers a sense of timelessness, where past and present merge into one moment. Visitors can 
                take in breathtaking views of the desert landscape, and marvel at the remarkable architecture and 
                artistry that created this destination. Timeless Gateway is a must-see destination for anyone seeking 
                inspiration and wonder in the midst of the desert wilderness.
            </p>
          </div>
          <div className='skyasylum-box'>
            <img src={tree} alt="oasis sky city" className='skyasylum-img'/>
            <p className='sub-text'>sky oasis</p>
            <p className='skyasylum-text'>            
                <span style={{color: '#ffdb6f'}}>Sky Oasis</span> is a desert city that features a unique floating pod filled with lush trees and gardens. 
                Visitors can explore the vibrant streets of the city below, and take a journey up to the pod for 
                stunning views and a serene atmosphere. The pod offers a range of amenities, including luxury hotels 
                and restaurants, museums, and art galleries. Sky Oasis is a must-see destination for anyone seeking 
                a blend of desert beauty and unexpected oasis.           
            </p>
          </div>
        </div>
      </div>
      <div className='arrow-box'>
        <Link to="/glacia" className='arrow-link'>
          <div className='arrow-right'>
            <img src={rightarrow} alt="rightarrow" className='arrow-img'/>
            <span className='arrow-text'>glacia</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SkyAsylum;
