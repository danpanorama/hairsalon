import React from 'react';
import './../../../css/all.css'
import './../../../css/home.css'
import { NavLink } from "react-router-dom";

function RowSec(props) {
  return (
    <div className={props.alldivclass}>
 <div className={props.class }>
 <div className="imagediv flexcenter">
<img className="image" src={props.image} alt="" />
        </div> 
        <div className="text">
           <div className="center">
           <h1 className="header">
            {props.header}
            </h1>
            <p className="pere">
                {props.pere}
            </p>
           </div>
           <NavLink className=" Link" 
              to={{ pathname: '/arcitals',
               state: {is:true} }}
             >
           <div className="butn">קראי עוד</div>
           </NavLink>
        </div>
 </div>
  

    </div>
  );
}

export default RowSec;
