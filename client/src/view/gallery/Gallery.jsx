import React,{useEffect,useState} from 'react';
import './../../css/all.css'
import './../../css/gallery.css'

import Image1 from '../../image/d1.jpg'
import Image2 from '../../image/d2.jpg'
import Image3 from '../../image/d3.jpg'
import Image4 from '../../image/d5.jpg'
import Image5 from '../../image/d6.jpg'
import Image6 from '../../image/d7.jpg'
import Image7 from '../../image/f1.png'
import Image8 from '../../image/f4.jpeg'




function Gallery(props) {
  const [imageState,setimageState] = useState({img:'',is_pop: false})

  let arr1 = [Image1,Image2,Image3,Image4,Image7,Image8]
  let arr2=[Image5,Image6,Image7,Image8,Image1,Image2]
  let arr3 = [Image2,Image5]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function getImage(img){
    if(imageState.is_pop){
        setimageState({img:'',is_pop:false}) 
    }else{
    
        setimageState({img: img.target.src ,is_pop:true})
    }

}



  return (
    <div className="flexcol all_gallery">
      
      <div className="gallery flexcenter">
      <h1 className="header">גלריית תמונות</h1>
      <div className="centerit">
      
        <div className="fourphotos">
          {arr1.map((e)=>{
           return(
            <div id={e}   className="imgSort">
            <img className='wh100 img'onClick={getImage} src={e} alt="" />
          </div>
           )
          })}

        </div>
        <div className="grid4-4">
        {arr3.map((e)=>{
           return(
            <div className="bigimage" >
            <img className="biggrid img" onClick={getImage}src={e} alt="" />
          </div>
           )
          })}
        </div>
        <div className="fourphotos">
          {arr2.map((e)=>{
           return(
            <div className="imgSort">
            <img className='wh100 img' onClick={getImage} src={e} alt="" />
          </div>
           )
          })}

        </div>
      </div>
      </div>

      <div className={imageState.is_pop? 'activpop':'disablepops'}>
                        <div className="quitof" onClick={getImage}>
                            יציאה
                        </div>
                        <div className="imagegallerypop">

                            <img src={imageState.img}className='hw100 im' onClick={getImage} alt="" />
                        </div>
                    </div>


    </div>
  );
}

export default Gallery;
