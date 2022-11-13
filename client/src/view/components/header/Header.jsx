import React from 'react';
import './../../../css/all.css'
import './../../../css/serves.css'
import Image from '../../../image/scissors-removebg-preview.png'


function Header(props) {

  return (
    <div className='header'>

 <div className="flexcenter">
 <h1 className="primeryheaders">{props.header}</h1>
  <img src={Image} alt="" height="70px" width='70px' />
 </div>

    </div>
  );
}

export default Header;
