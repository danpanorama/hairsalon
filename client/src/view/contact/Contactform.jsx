import React,{useEffect,useState} from 'react';
import './../../css/all.css'
import './../../css/news.css'
import Servis2 from '../components/homecomp/Servis2'
import Contact from './Contact';
import {useFormik} from "formik"
import axiosConfig from '../../config/AxiosConfig'



function Contactform(props) {
const [ErrState,SetErrState] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])




  
  const sendemail = useFormik({
    initialValues:{
    txt:"",
    name:"",
    email:'',
    phone:0,
    remember:false,
  },onSubmit:async values  => {
    try{
      axiosConfig.post("/comment/c*sendmail*c", values)
      .then((res) => {
        SetErrState('')
       if(values.remember){
        let obj = {name:values.name,email:values.email}
        let str = JSON.stringify(obj)
        localStorage.setItem('user',str)
       }
       SetErrState(res.data.msg)
       console.log(res)

      })
      .catch((err) => {
        console.log("error3",err)
      });
    }catch(e){
      console.log(e)
    }
  }});





  return (
    <div className="w100">
            <div className="all_news flexcol ">

<div className="padincontact flexrowtocol">
 <div className="w100 margtop margbot">
      
  <Contact sendemail={sendemail}/>
  {ErrState}
  <div className="space">

  </div>
<Servis2 class="grid212 margin150"/>

</div>
</div>
</div>

    </div>
  );
}

export default Contactform;
