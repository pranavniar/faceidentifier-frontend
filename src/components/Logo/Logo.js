import React from 'react';
import stranger from './stranger.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={stranger}/>
        </div>
    </div>
  );
}

export default Logo;