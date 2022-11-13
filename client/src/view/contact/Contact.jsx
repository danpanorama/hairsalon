import React,{useEffect} from 'react';
import './../../css/all.css'
import './../../css/nav.css'

function Contact(props) {


  return (
    <div className="w100">
      
      
      <h2 className="header directionrtl">שלחי הודעה עכשיו</h2>
      <form action=""   onSubmit={props.sendemail.handleSubmit} className="form">
 {/* <input type="text"   name='post_id'values={props.sendemail.values.post_id}
            onChange={props.sendemail.handleChange} value={props.test}  className="op0vis0" /> */}
     <div className="form_in_div flexcolcenter">
     <textarea   values={props.sendemail.values.txt}
            onChange={props.sendemail.handleChange}  name="txt" className='textarea' id="" ></textarea>
      
      <div className="gridrow divflex">
        <input type="text" placeholder="שם" name="name"   values={props.sendemail.values.name}
            onChange={props.sendemail.handleChange} className="input" />
        <input placeholder="אימייל" type="text"name="email" values={props.sendemail.values.email}
            onChange={props.sendemail.handleChange} className="input" />
        <input placeholder="טלפון" type="number" values={props.sendemail.values.phone}
            onChange={props.sendemail.handleChange} name='phone'  className="input" />
      </div>
      <div className="radio">
        <input type="checkbox" name="remember"
        values={props.sendemail.values.remember?"true":"false"}
        onChange={props.sendemail.handleChange} id="" className="radio_input" />
      </div>

     </div>
     <button type='submit' className="buttonsend">
       השארי הודעה
     </button>

      
      </form>


    </div>
  );
}

export default Contact;
