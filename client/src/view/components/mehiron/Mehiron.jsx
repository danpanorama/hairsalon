import React from 'react';
import './../../../css/all.css'
import NavIconLinks from '../navcomp/NavIconLinks'
import './../../../css/mehiron.css'

function Mehiron(props) {

  

  return (
    <div className="all_mehiron">
        <div className="table">
          {props.arr.map((e)=>{
              return(
                  <div className=" mehirontable">
               
               <div className="price">
                          <p className="price">
                                {e.price} &#8362;
                          </p>
                      </div>
                      <div className="spacebetween">

                      </div>

                      <div className=" mehirontable2">
                  
                    <div className="massager">
                    <p className="txtmehir">{e.txt}</p>
                    </div>
                      <div className="imagecircul">

                    </div>
                   </div>

                  </div>
              )

          })}
          <br /><br /><br /><NavIconLinks/>
        </div>


    </div>
  );
}

export default Mehiron;
