
const sql = require("../models/sql/sqlpools");


// this is create use rfunction

const deletecomment = async (req, res, next) => {
try {
console.log(req.body)
let getcomment = await sql.deletecomment(req.body.id);

res.json({msg:'delete seccsess'})

} catch (e) {
  console.log("::::",e)
  res.json({err:"error  delete comment" }).status(500);
}
};

module.exports.deletecomment = deletecomment;
