import React ,{useEffect,useState}from 'react';
import './../../../css/all.css'
import {useFormik} from "formik"
import axiosConfig from '../../../config/AxiosConfig'
import LeaveM from './LeaveM';
import CommentM from './CommentM';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../../store/Actions";
import {useLocation} from 'react-router-dom'


function Leaveform(props) {
const dispatch = useDispatch();
const [active,setActiv] = useState('')
const [commentidState,setcommentid] = useState('')
const [errStatemsg,setErrstatemsg] = useState('')
const navigate = useLocation();


function activate(e){
  if(active == e.target.id){
    
    setActiv('')
  }else{
    setActiv(e.target.id)   
  }
  setcommentid(e.target.id)

  
}


async function deletecomment(e){
  try{
    setErrstatemsg("")
    axiosConfig.post("/comment/c*delete*c", {id:e.target.id})
    .then((res) => {
      setErrstatemsg(res.data)
   dispatch({type:actionTypes.DELET_COMMENT,data:e.target.id})
    })
    .catch((err) => {
      console.log("error3",err)
    });
  }catch(e){
    setErrstatemsg(e)
    console.log(e)
  }
}




  const leavecomment = useFormik({
    initialValues:{
    txt:"",
    name:"",
    email:'',
    phone:0,
    post_id:props.test,
    remember:false,
    
  },onSubmit:async values  => {
    try{
      values.post_id = props.test
      axiosConfig.post("/comment/c*add*c", values)
      .then((res) => {
       if(values.remember){
        let obj = {name:values.name,email:values.email}
        let str = JSON.stringify(obj)
        localStorage.setItem('user',str)
       }
       setErrstatemsg(res.data.msg)
       console.log(res.data) 
dispatch({type:actionTypes.ADD_COMMENT,data:res.data.com})
dispatch({type:actionTypes.CONNECT,data:values})
  

  
      })
      .catch((err) => {
        console.log("error3",err)
      });
    }catch(e){
      console.log(e)
    }
  }});





  return (
    <div className=" ">

<div className="margintopbottom w100">
<CommentM deletecomment={deletecomment} leavecomment={leavecomment}  getcomments={props.getcomments} e={props.e}  activate={activate} active={active} />
</div>

<LeaveM test={props.test} leavecomment={leavecomment} />

    </div>
  );
}

export default Leaveform;
