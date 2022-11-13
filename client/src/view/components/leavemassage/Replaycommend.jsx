import React ,{useEffect,useState}from 'react';
import './../../../css/all.css'
import {useFormik} from "formik"
import axiosConfig from '../../../config/AxiosConfig'
import LeaveM from './LeaveM';
import CommentM from './CommentM';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../../store/Actions";


function Replaycommend(props) {
 const dispatch = useDispatch();




  const leavecomment = useFormik({
    initialValues:{
    txt:"",
    name:"",
    email:'',
    phone:0,
    post_id:props.e.id,
    commendid:props.mark,
    remember:false,
    
  },onSubmit:async values  => {
    try{
      axiosConfig.post("/comment/c*set*c", values)
      .then((res) => {
        console.log(res.data)
        // props.getcomments()
dispatch({type:actionTypes.ADD_COMMENT,data:res.data.com})
  

  
      })
      .catch((err) => {
        console.log("error3")
      });
    }catch(e){
      console.log(e)
    }
  }});





  return (
    <div className=" ">


<LeaveM header={props.header} leavecomment={leavecomment} />

    </div>
  );
}

export default Replaycommend;
