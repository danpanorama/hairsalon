import React,{useState} from "react";

import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../../image/d1.jpg'
import Image2 from '../../../image/d6.jpg'
import Image3 from '../../../image/d3.jpg'
import Image5 from '../../../image/d5.jpg'
import Image6 from '../../../image/d6.jpg'



function Carusel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className='carusel' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <div className="divi">
            <img
            className="d-block w-100 imgfull"
            src={Image1}
            alt="First slide"
          />
        </div>
        
           
          <Carousel.Caption>
            <h3>החלקות שיער באיכות מציוינת</h3>
            <p>החלקות מקצועיות לשמירה על השיער ומראה טבעי</p>
            <p className='address'>
           יפת 47 תל-אביב יפו
            </p>
            <a href="tel:+97245386437" className='callnow Link'>
          054-5386437 טל-
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <div className='divcaruselaa'> */}
            <div className="divi">
          <img
            className="d-block w-100 imgfull"
            src={Image2}
            alt="Second slide"
          />
          </div>
  {/* </div> */}
          <Carousel.Caption>
            <h3>גבות ריסים וצבע</h3>
            <p>צביעה ומסגרת ריסים איכותיים בגדלים שונים</p>
            <p className='address'>
           יפת 47 תל-אביב יפו
            </p>
            <a href="tel:+97245386437" className='callnow Link'>
          054-5386437 טל-
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="divi">
       <img
            className="d-block w-100 imgfull"
            src={Image3}
            alt="Third slide"
          />
      
  </div>
          <Carousel.Caption>
            <h3>לק ג'ל ובניית צפורניים</h3>
            <p>
              לק ג'ל פדיקור מניקור ועוד מלא פינוקים
            </p>
            <p className='address'>
           יפת 47 תל-אביב יפו
            </p>
            <a href="tel:+97245386437" className='callnow Link'>
          054-5386437 טל-
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  
  
  export default Carusel;