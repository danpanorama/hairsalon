import React,{useState}  from 'react';
import './../../css/all.css'
import Nav from './Nav';

function NavFunctional(props) {
 

  return (
    <div className="">

<Nav active={props.activeNavState}/>
    </div>
  );
}

export default NavFunctional;
