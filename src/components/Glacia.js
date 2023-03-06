import React from 'react';
import { Link } from 'react-router-dom';
import './css/Glacia.css';
import crystalcave from './img/crystalcave.png';
import glacia2 from './img/glacia2.png';
import rightarrow from './img/rightarrow.png';
import leftarrow from './img/leftarrow.png';

function Glacia() {
  return (
    <div className='glacia-page'>
      <h1 className='glacia-header'>GLACIA</h1>
      <div className='glacia-content'>
        <div className='glacia-boxes'>
          <div className='glacia-box'>
            <img src={crystalcave} alt="crystal cave" className='glacia-img'/>
            <p className='sub-text'>crystal cave</p>
            <p className='glacia-text'> 
                Glacia's <span style={{color: '#6fe2ff'}}>crystal cave</span> is a wonderland of natural beauty, sparkling with iridescent mineral 
                formations that glimmer in the soft light of lanterns. Tucked deep into the snowy mountains, 
                the cave is a chilly but magical retreat, offering visitors the chance to explore its winding 
                passages and discover hidden gems. The walls are adorned with glittering crystals that reflect 
                a rainbow of colors, while underground streams and pools add to the cave's ethereal ambiance. 
                The crystal cave is a must-see attraction for anyone visiting Glacia, offering a glimpse into 
                the awe-inspiring wonders of the natural world.
            </p>
          </div>
          <div className='glacia-box'>
            <img src={glacia2} alt="ephemeral" className='glacia-img'/>
            <p className='sub-text'>ephemeral</p>
            <p className='glacia-text'>            
                <span style={{color: '#6fe2ff'}}>Ephemeral</span> is a trendy restaurant in Glacia, known for its delicious food and unique atmosphere. 
                The interior is designed to look like a smokey blue cloud, with dim lighting and modern decor. 
                Their menu features a variety of international cuisines, including sushi, pasta, and steak. 
                Ephemeral is a must-visit spot for foodies and those looking for a memorable dining experience.
            </p>
          </div>
        </div>
      </div>
      <div className='arrow-box'>
        <Link to="/void" className='arrow-link'>
          <div className='arrow-right'>
            <img src={rightarrow} alt="rightarrow" className='arrow-img'/>
            <span className='arrow-text'>the void</span>
          </div>
        </Link>
        <Link to="/skyasylum" className='arrow-link'>
          <div className='arrow-left'>
            <img src={leftarrow} alt="leftarrow" className='arrow-img'/>
            <span className='arrow-text'>sky asylum</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Glacia;
