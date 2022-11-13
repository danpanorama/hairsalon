import React,{useState, useEffect} from 'react';
import { Routes ,Route,BrowserRouter,Navigate  } from 'react-router-dom';
import {Switch} from 'react-router'

import Serves from '../aboutes/Servise';
import DinamicFile from '../arcitals/DinamicFile';
import Page from '../components/pagecomp/Page';
import NavFunctional from './NavFunctional';
import Gallery from '../gallery/Gallery';
import HomeFunc from './../home/HomeFunc';
import NewsArr from '../news/NewsArr';
import PageNotFound from '../components/unknowPage/PageNotFound';
import Contactform from '../contact/Contactform';

function NavSwitch() {
const [activeNavState,setNavbarState ] = useState(false)

  useEffect(()=>{
    console.log('done')
    if(window.location.href == 'https://samia.co.il/news' ||window.location.href == 'https://samia.co.il/gallery' || window.location.href == 'https://samia.co.il/servise' || window.location.href == 'https://samia.co.il/contact'   ){
      setNavbarState(true)
      return
        
      }
      if(window.scrollY >= 70 ){


        setNavbarState(true)
       
      }
      else{
        setNavbarState(false)
      }

  })
 
 
  const changebacgraound = ()=>{
  if(window.location.href == 'https://samia.co.il/news' ||window.location.href == 'https://samia.co.il/gallery' || window.location.href == 'https://samia.co.il/servise' || window.location.href == 'https://samia.co.il/contact'   ){
    setNavbarState(true)
    return
      
    }
    if(window.scrollY >= 70 ){


      setNavbarState(true)
     
    }
    else{
      setNavbarState(false)
    }

    
  
    // if(window.location.href=='https://samia.co.il/' ){
    //   setNavbarState(false)
    //   return
    // }else{
    //   setNavbarState(true)
    // }

 }
 window.addEventListener('scroll', changebacgraound)






  return (
    <div className="">
<NavFunctional activeNavState={activeNavState} />
     <div>

     <Routes>
        <Route path="/" element={<HomeFunc/>}exact/>   
        <Route path="/gallery" element={<Gallery  />}exact/>  
        <Route path="/news"  element={<NewsArr />}exact />   
        <Route path="/arcitals" element={<Page  />}exact /> 
        {/* <Route path="/Page" component={Page}exact/>
        <PrivateRoute path="/updateelement" component={UpdateElement} exact/> */}
         <Route path='*' element={<PageNotFound/>}exact/>

         <Route path="/contact"  element={<Contactform  />}exact/>

         <Route path="/servise" element={<Serves  />}exact /> 

         
        </Routes>
      
     </div>
  
    </div>
  );
}

export default NavSwitch;
