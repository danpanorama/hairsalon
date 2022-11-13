import React from 'react';
import '../../../css/all.css'
import '../../../css/similerpost.css'
import {useNavigate} from 'react-router-dom'



function Similerpost(props) {
const navigate = useNavigate();
  return (
    <div className="flexcol all_similer">
        <h1 className="heder">
            Similar Posts
        </h1>
        <div className="postSquars ">
            {
                props.arcitve.arr.map((e)=>{
                    return(
                        <div className="cardsimilar flexcol" key={e.img}
                        onClick={()=>{
                            props.refreshes()          
                            navigate('/arcitals',{state:{arr:props.array,e:e}})
                              
                                   }}>
                            <div className="imgimg">
                                <img src={e.img} alt="" className="imgsimiler" />
                            </div>
                            <div className="wordsdate">
                                <h4 className="headersmall">{e.title}</h4>
                            <p className="date">{e.date}</p>
                            </div>

                        </div>
                    )
                })
            }
            
        </div>
  

    </div>
  );
}

export default Similerpost;
