import React from 'react';
import '../../../css/all.css'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function Newscomp(props) {
  const navigate = useNavigate();
  return (
    <div className="grid-2">
      {props.arr.map((e)=>{
      let  arr=props.arr
      let articals=e
        return(
          <div className="card-2" key={e.img}>
            <div className="image_haf">
              <img src={e.img} className='wh100 img' alt="" />

            </div>
            <div className="info">
              <p className='titelsmall '>news</p>
              <h2 className="header_news">{e.title}</h2>
              <p className="date">MAY 26. 2020</p>
              <p className="preg">{e.txt}</p>

             
                      <div className="button" onClick={()=>{
navigate('/arcitals',{state:{arr:props.arr,e:e}})
                      }}>
                      קראי עוד
                      </div>
                 
                
            
            </div>
          </div>
        )
      })}

        


    </div>
  );
}

export default Newscomp;
