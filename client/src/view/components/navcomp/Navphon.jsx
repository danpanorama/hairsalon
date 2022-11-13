import React from 'react';
import './../../../css/all.css'
import Logo from './../../../image/logo45.png'
import { NavLink } from "react-router-dom";
import NavIconLinks from './NavIconLinks';

function Navphon(props) {
  return (
    <div className="display_on_phon">
        <div className="hamburger" onClick={props.openMenu}>
            <div className="hamburgers"></div>
            <div className="hamburgers"></div>
            <div className="hamburgers"></div>
        </div>
        <div className={props.activeNavState?"menuPopUp flexcenter" :'closemenu flexcenter'}>
        <div onClick={props.openMenu} className="out">
                <div className="hamburger" onClick={props.openMenu}>
            <div className="hamburgers"></div>
            <div className="hamburgers"></div>
            <div className="hamburgers"></div>
        </div>
                </div>
            <div className="sortlinks flexcol">
             
            <NavLink className="linkphon" onClick={props.openMenu}  to="/">
                    דף הבית
                 </NavLink>
                 <NavLink className="linkphon" onClick={props.openMenu}  to="/gallery">
גלרייה                
 </NavLink>
                 
                 <NavLink className="linkphon" onClick={props.openMenu}  to="/news">
                    חדשות
                 </NavLink> 
                 <NavLink className="linkphon" onClick={props.openMenu}  to="/servise">
                    שירות
                 </NavLink>
                 <NavLink className="linkphon" onClick={props.openMenu}  to="/contact">
                    צרי קשר
                 </NavLink>
   
               
            </div>
 <div className=" w60">
 <NavIconLinks/>
 </div>
        </div>

     

    </div>
  );
}

export default Navphon;
