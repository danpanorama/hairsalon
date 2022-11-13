import React,{useEffect,useState} from 'react';
import './../../../css/all.css'
import './../../../css/news.css'
import DinamicFile from '../../arcitals/DinamicFile';
import SideNav from '../sidenav/SideNav';
import {useLocation} from 'react-router-dom'
import Iconlinks from '../newscomp/Iconlinks';
import Similerpost from '../newscomp/Similerpost';
import Leaveform from '../leavemassage/Leaveform';
import axiosConfig from '../../../config/AxiosConfig'
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../../store/Actions";

function Page(props) {
const [ArcitavState,setArcitavState] = useState({arr:[]})
const [refresh,setrefresh] = useState(true)

function refreshes(){
  setrefresh(!refresh)
}

  const navigate = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
    filter()
    getcomments()

  }, [refresh])
  async function filter(){
try{
  
  let arr=[]
  let array = navigate.state.arr;
 await array.filter((e)=>{
              
    if(e.id != navigate.state.e.id){
        arr = [...arr,e]
    }
    setArcitavState({arr:arr})
  })
}catch(e){
  console.log(e)
}
  }
  async function getcomments(){
    try{
     await axiosConfig.get("/comment/c*get*c",
     {params:{data:navigate.state.e.id}})
      .then((res) => {
       
    dispatch({type:actionTypes.GET_COMMENT,data:res.data.com})
 
  
      })
      .catch((err) => {
        console.log("error3",err)
      });
    }catch(err){
console.log(err)
    }
  }
   




  return (
    <div className="all_news flexcol ">

<div className="padin flexrowtocol">
       <div className="wid70p">
            
            <DinamicFile arcitve={navigate.state.e}/>
            <Iconlinks/>
            <div className="borderbot">
            <Similerpost refreshes={refreshes} array={navigate.state.arr} arcitve={ArcitavState}/>
            </div>
            <Leaveform test={navigate.state.e.id} getcomments={getcomments} e={navigate.state.e}/>
  <div className="space"></div>
        </div>
        
           <SideNav refreshes={refreshes}  arr={navigate.state.arr} />
        
       </div>




    </div>
  );
}

export default Page ;
