import React from 'react';
import './../../css/all.css'
import './../../css/news.css'
import Post from '../components/pagecomp/Post';



function DinamicFile(props) {

  


  return (
    <div className="">
<Post arr={props.arcitve}/>


    </div>
  );
} 

export default DinamicFile;
