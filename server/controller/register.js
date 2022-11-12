
const sql = require("../models/sql/sqlpools");


// this is create use rfunction

const register = async (req, res, next) => {
try {
 

 let getphone = await sql.getcommentbyphone(req.body.phone);

  if(getphone[0].length >0){
     let getemail = await sql.getcostumerbyemail(req.body.email);
    if(getemail[0].length >0){         
         console.log('email is in ues')
           
    }
    console.log('phone is in ues')
    next()  
    return 
  }else{
    if(req.body.remember){
        let setcostumer = await sql.inseretcostumer(req.body.name,req.body.email,req.body.phone)
    
        next()
      }
      else{
        next()
      }
  }







} catch (e) {
  console.log("::::",e)
  res.json({err:"error register " + e }).status(500);
}
};

module.exports.register = register;
