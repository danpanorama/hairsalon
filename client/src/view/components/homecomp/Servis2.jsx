import React from 'react';
import './../../../css/all.css'
import './../../../css/serves.css'
import Img1 from '../../../image/d2.jpg'
import Img2 from '../../../image/d1.jpg'
import Img3 from '../../../image/d5.jpg'
import Img4 from '../../../image/d6.jpg'
import Img5 from '../../../image/d7.jpg'
import Img6 from '../../../image/d8.jpg'

function Serves2(props) {
    let arr =[{txt:"בניית ציפורניים",img:"img1"},
    {txt:"תוספות שיער",img:"img2"},
    {txt:"פן ותסרוקות",img:"img3"},
    {txt:"גבות",img:"img4"},
    {txt:"ריסים",img:"img5"},
    {txt:"איפור קבוע",img:"img6"},]
  return (
    <div className={props.class}>
        {arr.map((e)=>{
return(
    <div className={e.img+" card2"}>
            <h3 className="title">{e.txt}</h3>
          

    </div>
)
        })}


  

    </div>
  );
}

export default Serves2;
