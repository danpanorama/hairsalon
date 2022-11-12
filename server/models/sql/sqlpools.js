const pool = require("./mysql2");

const getcomment = (id) => {
  return pool.execute(`SELECT * FROM samiacoi_commends.'TABLE 1' WHERE post_id = ? `,[id]);
};
const getcommentid = (id) => {
  return pool.execute(`SELECT * FROM samiacoi_commends.'TABLE 1' WHERE id = ? `,[id]);
};
const getcommentbydate = (id,date) => {
  return pool.execute(`SELECT * FROM samiacoi_commends.'TABLE 1' WHERE post_id = ? and date = ?`,[id,date]);
};

const getcostumerbyemail = (email) => {
  return pool.execute(`SELECT * FROM samiacoi_commends.'TABLE 3' WHERE email = ? `,[email]);
};
const getcommentbyphone = (phone) => {
  return pool.execute(`SELECT * FROM samiacoi_commends.'TABLE 3' WHERE phone = ? `,[phone]);
};

const deletecomment = (id) => {
  return pool.execute(
    `DELETE FROM samiacoi_commends.'TABLE 1' WHERE id = ? `,
    [id]
  );
};
const inseretcomment = (txt,name,email,post_id,date) => {
  return pool.execute(
    `INSERT INTO samiacoi_commends.'TABLE 1' (txt,name, email, post_id,date) 
      VALUES 
      (?, ?, ?, ?,?) `,
    [txt,name,email,post_id,date]
  );
};
const inseretcommendcomments = (comment,id) => {
  return pool.execute(
    `UPDATE comment SET samiacoi_commends.'TABLE 1' = ? where id = ? `,
    [comment,id]
  );
};

const inseretcostumer = (name,email,phone) => {
  return pool.execute(
    `INSERT INTO samiacoi_commends.'TABLE 3' (name,email, phone) 
      VALUES 
      (?, ?, ?) `,
    [name,email,phone]
  );
};








module.exports.getcomment = getcomment;
module.exports.deletecomment = deletecomment;
module.exports.inseretcomment = inseretcomment;
module.exports.getcommentbydate = getcommentbydate;


module.exports.getcostumerbyemail = getcostumerbyemail;
module.exports.inseretcostumer = inseretcostumer;
module.exports.getcommentbyphone = getcommentbyphone;
module.exports.inseretcommendcomments = inseretcommendcomments;
module.exports.getcommentid = getcommentid;

