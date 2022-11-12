
const sql = require("../models/sql/sqlpools");


// this is create use rfunction

const setcomment = async (req, res, next) => {
try {
  const date = await new Date();
  let set = { 
      txt:req.body.txt, 
      name:req.body.name,
      email:req.body.email,
      post_id: req.body.post_id,
      date:date
    }
    
      let getcomment = await sql.getcommentid(req.body.commendid);
      console.log(getcomment[0])

      let result = getcomment[0].commends;
      let id = req.body.commendid
      let arr = []
      if(result == null||result == undefined){
        console.log('is null')
         arr = [set]
      }else{
          let commends_arr = JSON.parse(result);
          arr = [...commends_arr, set];
      }
      let str = JSON.stringify(arr)
      console.log(str,id)
      let setcomment = await sql.inseretcommendcomments(str,id);
    

      let allcommends = await sql.getcomment(req.body.post_id);

      res.json({msg:'thank you',com:allcommends[0]})

} catch (e) {
  console.log("::::",e)
  res.json({err:"error add comment" + e }).status(500);
}
};

module.exports.setcomment = setcomment;
