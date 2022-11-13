import React from 'react';
import '../../../css/all.css'
import {useNavigate} from 'react-router-dom'

function Articles(props) {
    const navigate = useNavigate(); 
  return (
    <div className="">
        <div className="articals">
            {
                props.arr.map((e)=>{
                    return(
                        <div className="artical flexrowrevers" key={e.title}  onClick={()=>{
                            props.refreshes()          
                            navigate('/arcitals',{state:{arr:props.arr,e:e}})
                              
                                   }}>
                            <div className="imageartical">
                            <img src={e.img} alt="" className="img wh100" />
                            </div>
                            <div className="headerartical flexcol">
                                <p className="smallheader">{e.title}</p>
                                <p className="date ">MAY 25, 2020</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
      

        


    </div>
  );
}

export default Articles;
