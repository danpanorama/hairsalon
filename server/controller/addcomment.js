
const sql = require("../models/sql/sqlpools");
const joi = require('../auth/joi')


// this is create use rfunction

const addcomment = async (req, res, next) => {
try {
  const date = await new Date();
  let danieltambal = await joi.createProductSchema(req.body)
  
  req.body.date = date;
  let addcomment = await sql.inseretcomment(req.body.txt,
    req.body.name,
    req.body.email,
    req.body.post_id,
    req.body.date
    );
  let getcomment = await sql.getcomment(req.body.post_id);


res.json({msg:'thank you',com:getcomment[0]})

} catch (e) {
  console.log("::::",e)
  res.json({msg:"you got an error commend the post check if you fill all the info " + e }).status(500);
}
};

module.exports.addcomment = addcomment;
