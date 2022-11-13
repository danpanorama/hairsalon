import React from 'react';
import './../../../css/all.css'
import './../../../css/comment.css'
import {useDispatch,useSelector} from "react-redux";
import LeaveM from './LeaveM';
import Replaycommend from './Replaycommend';

 
function CommentM(props) {
  const comments =  useSelector((state)=>state.comment.comments);
  const len =  useSelector((state)=>state.comment.len);
 

  const user =  useSelector((state)=>state.user);


  return (
    <div className=" margtopbottom">
      <h3>there are {len} comment</h3>
        {comments.map((e)=>{
        
          return(
            <div key={e.id} className="comment">
             <div className="boto">
              
             {user.email == e.email ?   <span id={e.id} onClick={props.deletecomment}>x</span>:""}
          <div className="infocoment flexrow">
            <div className="imagecomment"></div>
          <p className="namecomm">
            {e.name}
          </p>
          </div>
          <p className="date datecom">
            {e.date}
          </p>
          <p className="commentText">
            {e.txt}
          </p>
          
          <p className="replay" id={e.id}   onClick={props.activate}>Replay</p>
          </div>
          {console.log(e.commends)}
          {
            e.commends ?  e.commends.map((e)=>{
             return(
              <div className="boto " key={e.id}>
              <div className="answar">
                {console.log(e.email,user.email)}
              {user.email == e.email ?   <span>x</span>:""}
              <div className="infocoment flexrow">
                <div className="imagecomment"></div>
              <p className="namecomm">
                {e.name}
              </p>
              </div>
              <p className="date datecom">
                {e.date}
              </p>
              <p className="commentText">
                {e.txt}
              </p>
              
              <p className="replay" id={e.id}   onClick={props.activate}>Replay</p>
             </div> 
             </div>
             )

            }):''
          }
          <div className={props.active == e.id?"open":"closeopen"}>
           <Replaycommend mark={e.id} header={e.name} commendid={e.id} e={props.e}/>
          </div>
         
        </div>
          )
        })}


    </div>
  );
}

export default CommentM;
