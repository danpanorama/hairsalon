import React,{useState} from 'react';
import './../../css/all.css'
import './../../css/nav.css'

import NavLinks from '../components/navcomp/NavLinks';
import NavIconLinks from "../components/navcomp/NavIconLinks"
import NavLogo from '../components/navcomp/NavLogo'
import Navphon from '../components/navcomp/Navphon';


function Nav(props) {
  const [activeNavState,setNavState] = useState(false)
  function openMenu(){
    return setNavState(!activeNavState);
  }

  return (
    <div className={props.active ? 'activNav transition':'flexcol disableNav transition'}>
<div className="flexrow naviconsrow display_non_on_phon">
   <NavIconLinks/>
</div>
 


<Navphon activeNavState={activeNavState} openMenu={openMenu}/>

<NavLogo active={props.active}/>
<NavLinks/>


    </div>
  );
}

export default Nav;
