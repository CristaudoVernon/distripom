var express = require('express');
var router = express.Router();
var usuariosModel = require('./../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async (req,res,next) => {
  try{
    var usuario = req.body.usuario;
    var password = req.body.password;

    console.log(req.body);

    var data = await usuariosModel.getUserAndPassword(usuario, password);

    if (data != undefined) {
      res.redirect('/admin');
    }else{
      res.render('../views/index', {
        layout: 'layout',
        error: true
      })
    }
  }catch(e){
    console.log(e)
  }
});

module.exports = router;









//40:36 integracion parte 2
