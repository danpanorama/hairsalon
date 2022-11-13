import React from 'react';
import './../../../css/all.css'
import Logo from './../../../image/logo45.png'

function NavLogo(props) {
  return (
    <div className={props.active?'smalllogo transition':'biglogo transition'}>

      <img className='wh100 transition' src={Logo} alt="" />
      


    </div>
  );
}

export default NavLogo;
