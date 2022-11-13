import React,{useState} from 'react';
import './../../../css/all.css'
import './../../../css/footer.css'
import NavLogo from '../navcomp/NavLogo';
import NavLinks from '../navcomp/NavLinks';
import NavIconLinks from '../navcomp/NavIconLinks';



function Footer(props) {


  return (
    <div className='footer'>

<div className="w50">
<NavLogo/>
</div>
<div className="flexcenter w100">
  <NavLinks/>
  <NavIconLinks/>
</div>
    </div>
  );
}

export default Footer;
