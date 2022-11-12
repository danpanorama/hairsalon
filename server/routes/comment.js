var express = require('express');
var router = express.Router();
const controlerSQL = require('./../controller/addcomment')
const getSQL = require('./../controller/getcomment')
const register = require('../controller/register')
const setSQL = require('../controller/setcomment')
const deletesel = require('../controller/deletecomment')
const mail = require('../controller/mailsend')
const Sms = require('../controller/taxt')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg:'ok'})
});

router.post('/c*add*c',register.register,controlerSQL.addcomment, function(req, res, next) {
  
  });
  router.get('/c*get*c',getSQL.getcomment, function(req, res, next) {
  
  });
  router.post('/c*set*c',setSQL.setcomment, function(req, res, next) {

  });
  router.post('/c*delete*c',deletesel.deletecomment, function(req, res, next) {

  });
  router.post('/c*sendmail*c',Sms.textm, function(req, res, next) {

  });

module.exports = router;
