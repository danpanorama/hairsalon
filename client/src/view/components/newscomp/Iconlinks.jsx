import React from 'react';
import '../../../css/all.css'
import '../../../css/iconlinks.css'

import { Link } from "react-router-dom";


function Iconlinks(props) {

  return (
    <div className="flexcol iconlinks">
  
            <div className="allIcons flexrow" >
                <div className="icons flexcenter face">
                    <li className="fa fa-facebook "></li>
                </div>
                <div className="icons flexcenter inst">
                    <li className="fa fa-instagram "></li>
                </div>
                <div className="icons flexcenter goog">
                    <li className="fa fa-google "></li>
                </div>
                <div className="icons flexcenter waz">
                    <li className="fab fa-waze "></li>
                </div>
                <div className="icons flexcenter twit">
                    <li className="fa fa-twitter "></li>
                </div>
            </div>
            <div className="adminimage">

            </div>


    </div>
  );
}

export default Iconlinks;
