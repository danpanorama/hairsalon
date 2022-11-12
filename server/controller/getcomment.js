const sql = require("../models/sql/sqlpools");


// this is create use rfunction

const getcomment = async (req, res, next) => {
try {

  let getcomment = await sql.getcomment(req.query.data);
  console.log(req.query.data)

res.json({msg:'thank you',com:getcomment[0]})

} catch (e) {
  console.log("::::",e)
  res.json({err:"error add comment" }).status(500);
}
};

module.exports.getcomment = getcomment;
