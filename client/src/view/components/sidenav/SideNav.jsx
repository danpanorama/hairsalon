import React from 'react';
import '../../../css/all.css'
import InfoSelf from './InfoSelf';
import Titlesmall from '../header/Titlesmall';
import Articles from './Articles';


function SideNav(props) {
    
console.log(props)

  return (
    <div className="sidenav ">
        <Titlesmall header="מנהלת המספרה"/>
    <InfoSelf/>
    <div className="space">

    </div>
    <Titlesmall header=" כתבות נוספות"/>
    <Articles refreshes={props.refreshes} arr={props.arr}/>
        
    </div>
  );
}

export default SideNav;
