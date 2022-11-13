import React,{useEffect} from 'react';
import './../../css/all.css'
import './../../css/home.css'
import RowSec from '../components/homecomp/RowSec';
import Serves from '../components/homecomp/Serves'
import Image1 from '../../image/d1.jpg'
import Image2 from '../../image/d5.jpg'
import Header from '../components/header/Header';
import Carusel from '../components/carusel/Carusel.jsx'
import CostumerC from '../components/carusel/CostumerC';
import Mehiron from '../components/mehiron/Mehiron';
import MehironFunc from '../components/mehiron/MehironFunc';
import Hotesposts from '../components/newscomp/Hotesposts';
import Callnow from '../components/callnow/Callnow';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flexcolcenter ">
      <div className='homeOpenBg '><Carusel/></div>
<div className="paddingsides">
  
<RowSec alldivclass="sec flexcol" class="rowsection flexrowtocol" image={Image1} pere="אנו מעמידים לרשותך ידע, ניסיון ושיטה מוכחת לתוספות שיער בשיטת התפירה, שלא תסב לך נזקים, תתבצע במהירות ותספק תוצאות מושלמות. אל תוותרי על התוצאה המיוחלת, בואי ליהנות כבר עכשיו אחת ולתמיד מהשיער שתמיד חלמת עליו – במחיר מיוחד." header="מספרת מלי וסאמיה"/>

<RowSec alldivclass="sec flexcol bgblack" class="rowsection flexrowreverstocol" image={Image2} pere="תוספות שיער ללא נזק ללא הלחמה וללא הדבקה – תוספות שיער בשיטת התפירה.אל תוותרי על אחד מסממני היופי הנשי – ועל מראה צעיר ובריא – זה הזמן ליהנות מתוספות שיער בלי לסבול מכאבים ובלי לגרום לשיער נזקים מיותרים!" header="תוספות שיער"/>
<Header header="השירות שלנו" />
<Serves class="grid margin150"/>
<Header header="לקוחות ממליצות" />

<div className="hwmy">
<CostumerC/>
</div>

<Header header="מחירון" />
<MehironFunc namearr={1}/>

<div className="hwmy">
<Header header="הלקוחות שלנו" />
<CostumerC/>
</div>
<Callnow/>
<Header header="החדשות החמות" />
<Hotesposts/>
</div>
    </div>
  );
}

export default Home;
