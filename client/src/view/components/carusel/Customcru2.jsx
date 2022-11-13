import React,{useState} from "react";
import '../../../css/caruselala.css'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../../image/d1.jpg'
import Image2 from '../../../image/d6.jpg'
import Image3 from '../../../image/d3.jpg'
import Image5 from '../../../image/d5.jpg'
import Image6 from '../../../image/d6.jpg'



function Customcru2() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel  className="carusel"  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='flexcenter'>
        
        
           
          <Carousel.Caption >
          <div className="circulimg">

</div>
        
            <p className='txtblack bgwhite'>בואו נתחיל שהשירות והיחס של סמיה מעל ומעבר לכל ציפייה !
התוספות שיער באיכות נדירה ממליצה בחום</p>
            <h4  className='cblack heder bgwhite'>מייסה אבו קעוד</h4>
            <p className='date'>
        25 MAY , 2020
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <div className='divcaruselaa'> */}

  {/* </div> */}
          <Carousel.Caption>
          <div className="circulimg">

</div>
            <p className='txtblack bgwhite'>חייבת להגיד שניסיתי תוספות לפני אבל על השיטה של סמיה באמת שאין בלי דבק בלי כאבים חבל על הזמן לא
הורס את השיער להפך משקם אותו אין נשירה
הרגשה פשוט של וואו זאת שיטה מויוחדת שיטה בתפירה
בנות עד שלא תנסו לא תבינו כמה זה נוח  יפה ובאמת לא  כואב
חוץ מהעבודה הטובה היחס החם שאני מקבלת כל פעם שמגיעה אני ממש ממליצה על סמיה אישה טובה עם ידיים מזהב
ממולץץ מאודד</p>
            <h4 className='cblack heder bgwhite'>Elana Sh</h4>
            <p className='date'>
        25 MAY , 2020
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
       
       
      
  
          <Carousel.Caption>
          <div className="circulimg">

</div>
         
            <p className='txtblack bgwhite'>אין עלייך סאמו אני חייבת לציין שפעם ראשונה שאני שמה תוספות שהם לא הלחמה ולא דבק ולא חרוזים ואני מרוצה אני כבר שנה וחצי איתם לא רואים שאני עם תוספות זה נראה לגמרי טבעי, והאיכות של השיער אין דברים כאלה!! אני מסרקת חופפת וכלום לא מציק לי  זמן רב אני עם תוספות ותמיד הורדתי בגלל הרסתות עכשיו אין רסתות וכלום לא מציק לי התוספות הכי נוחות הם רק אצלך  והשיטה שאת המצאת היא השיטה הכי נוחה ממליצה בחוםםםם אוהבת אותך מאוד מי שלא מנסה מפסיד בגדולללל 👌</p>
            <h4 className='cblack heder bgwhite'>Alaoush Ash</h4>
            <p className='date'>
        25 MAY , 2020
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  
  
  export default Customcru2;