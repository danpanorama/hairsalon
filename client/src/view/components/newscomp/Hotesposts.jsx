import React from 'react';
import '../../../css/all.css'
import '../../../css/similerpost.css'
import {useNavigate} from 'react-router-dom'

import { NavLink } from "react-router-dom";


function Hotesposts(props) {
const navigate = useNavigate();
  return (
    <div className="flexrowtocol rowne">
       <NavLink className="Link cblack w30-"  to="/news"> 
        <div className="hotestnews flexcenter">
            <div className="ciculimage i1">

            </div>
           
            <div className="peregr">
                <p className="txthot">עובדה! , תוספות שיער איכותייות שלא מזיקות לשיערך כלל!</p>
            </div>
            <p className="date">MAY 25, 2020</p>
        </div></NavLink>
        <NavLink className="Link cblack w30-"  to="/news"> 
        <div className="hotestnews flexcenter">
            <div className="ciculimage i2">

            </div>
            <div className="peregr">
                <p className="txthot">למה לחכות בואו תראו איך השיטה עובדת ולמה כדאי להשתמש בה</p>
            </div>
            <p className="date">MAY 25, 2020</p>
        </div>
        
        </NavLink>
        <NavLink className="Link cblack w30-"  to="/news"> 
        <div className="hotestnews flexcenter">
            <div className="ciculimage i3">

            </div>
            <div className="peregr">
                <p className="txthot">הנזק שאפשר לעשות אם לא משתמשים בשיטה הנכונה</p>
            </div>
            <p className="date">MAY 25, 2020</p>
        </div>
  </NavLink>
    </div>
  );
}

export default Hotesposts;
