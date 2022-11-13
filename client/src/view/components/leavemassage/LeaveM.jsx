import React from 'react';
import './../../../css/all.css'
import './../../../css/leavemassag.css'


function LeaveM(props) {
  return (
    <div className="w100 ">
      <h2 className="header directionrtl">{props.header?"השארי תגובה ל "+props.header:'השארי תגובה תודה'}</h2>
      <form action=""   onSubmit={props.leavecomment.handleSubmit} className="form">
 {/* <input type="text"   name='post_id'values={props.leavecomment.values.post_id}
            onChange={props.leavecomment.handleChange} value={props.test}  className="op0vis0" /> */}
     <div className="form_in_div flexcolcenter">
     <textarea   values={props.leavecomment.values.txt}
            onChange={props.leavecomment.handleChange}  name="txt" className='textarea' id="" ></textarea>
      
      <div className="gridrow divflex">
        <input type="text" placeholder="שם" name="name"   values={props.leavecomment.values.name}
            onChange={props.leavecomment.handleChange} className="input" />
        <input placeholder="אימייל" type="text"name="email" values={props.leavecomment.values.email}
            onChange={props.leavecomment.handleChange} className="input" />
        <input placeholder="טלפון" type="number" values={props.leavecomment.values.phone}
            onChange={props.leavecomment.handleChange} name='phone'  className="input" />
      </div>
      <div className="radio">
        <input type="checkbox" name="remember"
        values={props.leavecomment.values.remember?"true":"false"}
        onChange={props.leavecomment.handleChange} id="" className="radio_input" />
      </div>

     </div>
     <button type='submit' className="buttonsend">
       שלח תגובה
     </button>

      
      </form>


    </div>
  );
}

export default LeaveM;
