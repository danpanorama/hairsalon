import React,{useState,useEffect} from 'react';
import './../../../css/all.css'
import './../../../css/mehiron.css'
import Mehiron from './Mehiron';

function MehironFunc(props) {

const [arr,setarr]= useState()

let arr1=[
    {img:'',
    txt:'תספורת',
    price:'80'},
    {img:'',
    txt:'פן',
    price:'50-150'},
    {img:'',
    txt:'צבע שורש',
    price:'70'},
    {img:'',
    txt:'צבע שיער מלא',
    price:'150-200'},
    {img:'',
    txt:'פסים חצי ראש',
    price:'350-500'},
    {img:'',
    txt:'פסים ראש מלא',
    price:'450-600'},
    {img:'',
    txt:'סירוק כלה לבן',
    price:'1000'},
    {img:'',
    txt:'סירוק עם תוספת ',
    price:'500'},
    {img:'',
    txt:'סירוק ',
    price:'350'},
    {img:'',
    txt:'סירוק ילדות',
    price:'150-250'},
    {img:'',
    txt:'בייביליס עם תוספות',
    price:'500'},
]

let arr2 = [
    {img:'',
    txt:'גבות',
    price:'50'},
    {img:'',
    txt:'גבות צבע',
    price:'70'},
    {img:'',
    txt:'פנים +צבע',
    price:'120'},
    {img:'',
    txt:'שפם',
    price:'10'},
    {img:'',
    txt:'הדבקת ריסים',
    price:'100'},
    {img:'',
    txt:'הצללת גבות',
    price:'400'},
    {img:'',
    txt:'גבות בשיטת השערה',
    price:'400'}
]

let arr3 = [
    {img:'',
    txt:'בניית ציפורניים',
    price:'200'},
    {img:'',
    txt:'הדבקת צפורניים',
    price:'100'},
    {img:'',
    txt:'מילוי',
    price:'100'},
    {img:'',
    txt:"לק ג'ל",
    price:'100'},
    {img:'',
    txt:"לק בצפורניים",
    price:'40-50'},
    {img:'',
    txt:"איפור ערב",
    price:'250'},
]

// let arr = [
//     {img:'',
//      txt:'תספורת',
//      price:'80'},
//      {img:'',
//      txt:'פן',
//      price:'50-150'},
//      {img:'',
//      txt:'צבע שורש',
//      price:'70'},
//      {img:'',
//      txt:'צבע שיער מלא',
//      price:'150-200'},
//      {img:'',
//      txt:'פסים חצי ראש',
//      price:'350-500'},
//      {img:'',
//      txt:'פסים ראש מלא',
//      price:'450-600'},
//      {img:'',
//      txt:'סירוק כלה לבן',
//      price:'1000'},
//      {img:'',
//      txt:'סירוק עם תוספת ',
//      price:'500'},
//      {img:'',
//      txt:'סירוק ',
//      price:'350'},
//      {img:'',
//      txt:'סירוק ילדות',
//      price:'150-250'},
//      {img:'',
//      txt:'בייביליס עם תוספות',
//      price:'500'},
//      {img:'',
//      txt:'גבות',
//      price:'50'},
//      {img:'',
//      txt:'גבות צבע',
//      price:'70'},
//      {img:'',
//      txt:'פנים +צבע',
//      price:'120'},
//      {img:'',
//      txt:'שפם',
//      price:'10'},
//      {img:'',
//      txt:'הדבקת ריסים',
//      price:'100'},
//      {img:'',
//      txt:'הצללת גבות',
//      price:'400'},
//      {img:'',
//      txt:'גבות בשיטת השערה',
//      price:'400'},
//      {img:'',
//      txt:'בניית ציפורניים',
//      price:'200'},
//      {img:'',
//      txt:'הדבקת צפורניים',
//      price:'100'},
//      {img:'',
//      txt:'מילוי',
//      price:'100'},
//      {img:'',
//      txt:"לק ג'ל",
//      price:'100'},
//      {img:'',
//      txt:"לק בצפורניים",
//      price:'40-50'},
//      {img:'',
//      txt:"איפור ערב",
//      price:'250'},
//     ]



useEffect(()=>{
  switch (props.namearr) {
      case 1:
          console.log('1')
          setarr(arr1)
          break;
          case 2:
          setarr(arr2)
          break;
          case 3:
          setarr(arr3)
          break;
  
      default:
          break;
  }
},[])

 


  return (
    <div className="">
    <h1 className="mehironheader">שיער</h1>
<Mehiron arr={arr1} />
<h1 className="mehironheader">שפם גבות</h1>
<Mehiron arr={arr2} />
<h1 className="mehironheader">לק איפור ערב</h1>
<Mehiron arr={arr3} />
    </div>
  );
}

export default MehironFunc;
