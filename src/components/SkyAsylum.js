import React from 'react';
import { Link } from 'react-router-dom';
import './css/SkyAsylum.css';
import crystalcave from './img/crystalcave.png';
import glacia2 from './img/glacia2.png';
import rightarrow from './img/rightarrow.png';


function SkyAsylum() {
  return (
    <div className='skyasylum-page'>
      <h1 className='skyasylum-header'>SKY ASYLUM</h1>
      <div className='skyasylum-content'>
        <div className='skyasylum-boxes'>
          <div className='skyasylum-box'>
            <img src={crystalcave} alt="crystal cave" className='skyasylum-img'/>
            <p className='sub-text'>crystal cave</p>
            <p className='skyasylum-text'> 
                Glacia's crystal cave is a wonderland of natural beauty, sparkling with iridescent mineral 
                formations that glimmer in the soft light of lanterns. Tucked deep into the snowy mountains, 
                the cave is a chilly but magical retreat, offering visitors the chance to explore its winding 
                passages and discover hidden gems. The walls are adorned with glittering crystals that reflect 
                a rainbow of colors, while underground streams and pools add to the cave's ethereal ambiance. 
                The crystal cave is a must-see attraction for anyone visiting Glacia, offering a glimpse into 
                the awe-inspiring wonders of the natural world.
            </p>
          </div>
          <div className='skyasylum-box'>
            <img src={glacia2} alt="ephemeral" className='skyasylum-img'/>
            <p className='sub-text'>ephemeral</p>
            <p className='skyasylum-text'>            
                Ephemeral is a trendy restaurant in Glacia, known for its delicious food and unique atmosphere. 
                The interior is designed to look like a smokey blue cloud, with dim lighting and modern decor. 
                Their menu features a variety of international cuisines, including sushi, pasta, and steak. 
                Ephemeral is a must-visit spot for foodies and those looking for a memorable dining experience.
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
