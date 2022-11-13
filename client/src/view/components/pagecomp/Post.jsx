import React,{useEffect} from 'react';
import './../../../css/all.css'
import './../../../css/news.css'
import DinamicFile from '../../arcitals/DinamicFile';
import SideNav from '../sidenav/SideNav';
import {useLocation} from 'react-router-dom'



function Post(props) {

  return (
    <div className="newspost">
        <div className="headering flexcenter">
            <p className="pregraph titelsmall" >NEWS</p>
            <h1 className="headerPost ">{props.arr.title}</h1>
            <p className="datepost ">MAY 25, 2020</p>
        </div>
       <div className="imagepluswords">
       <div className="imagell">
            <img src={props.arr.img} className='img' alt="" />
        </div>
        <div className="words flexcol">
       <div className="rights">
           
       <div className="pergdiv">
                <p className="textpost">{props.arr.txt}</p>
            </div>
            <div className="pergdiv">
            <h3 className="headerPost">{props.arr.sidetitle}</h3>
                <p className="textpost">{props.arr.sidetxt}</p>
            </div>
          
            <div className="pergdiv">
            <h3 className="headerPost">{props.arr.title}</h3>
                <p className="textpost">{props.arr.txtlong}</p>
            </div>
       </div>
        </div>
       </div>







    </div>
  );
}

export default Post ;
