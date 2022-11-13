import React,{useEffect} from 'react';
import './../../css/all.css'
import './../../css/news.css'
import SideNav from '../components/sidenav/SideNav';
import Newscomp from '../components/newscomp/Newscomp';


function News(props) {
  console.log(props.route)
  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])
  return (
    <div className="all_news flexcol">

       <div className="padin flexrowtocol">
       <div className="wid70">
            <h1 className="titleheader">news</h1>
            <Newscomp arr={props.arr}/>    
        </div>
        
           <SideNav refreshes={props.refreshes} arr={props.arr}/>
        
       </div>


    </div>
  );
}

export default News;
