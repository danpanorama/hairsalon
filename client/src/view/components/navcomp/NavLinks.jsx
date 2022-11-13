import React from 'react';
import './../../../css/all.css'
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flexrow linklist display_non_on_phon">
          <NavLink className="navLink"  to="/">
                    דף הבית
                 </NavLink>
                 <NavLink className="navLink"  to="/gallery">
                  גלרייה
                 </NavLink>
                 <NavLink className="navLink"  to="/servise">
                    שירות
                 </NavLink>
                 <NavLink className="navLink"  to="/news">
                   אודות
                 </NavLink>
                 <NavLink className="navLink"  to="/contact">
                   צרי קשר
                 </NavLink>


    </div>
  );
}

export default NavLinks;
