import React from 'react';
import './../../../css/all.css'

function NavIconLinks(props) {
  return (
    <div className="flexrow naviconsrow ">
      <a className='tac' href="https://www.facebook.com/Samia-Mali-110910940469668/">
      <div className="icon">
        <li className="fa fa-facebook"></li>
      </div>
      </a>
      <a className='tac' href="https://instagram.com/malisamiahairstyle?igshid=18ym9yn0yn50b">
      <div className="icon">
        <li className="fa fa-instagram"></li>
      </div>
      </a>

      <a className='tac' href="https://www.google.com/maps/place/%D7%9E%D7%A1%D7%A4%D7%A8%D7%AA+%D7%9E%D7%9C%D7%99+%D7%95%D7%A1%D7%90%D7%9E%D7%99%D7%94%E2%80%AD/@32.0498859,34.7528542,15z/data=!4m7!3m6!1s0x0:0xbb88f1d93a78ca1b!8m2!3d32.0498859!4d34.7528542!9m1!1b1">
      <div className="icon">
        <li className="fa fa-google"></li>
      </div>
      </a>
      <a className='tac' href="https://api.whatsapp.com/send?phone=9720545386437&text=היי סמיה ! מתי אפשר לקבוע תור?">
      <div className="icon">
        <li className="fab fa-whatsapp"></li>
      </div>
      </a>


    </div>
  );
}

export default NavIconLinks;
