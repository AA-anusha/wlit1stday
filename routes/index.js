var express = require('express');
var router = express.Router();

/* GET home page. */
var person={
	name:'Anusha Singh',
	age:20,
	address:'Teku',
	college:'NewSummit',
	course:'BscCSIT',
	semester:'Fifth',
	facebookLink:'https://www.facebook.com/anusha.singh.376',
	profilePicture:'images/ansuha.jpg'
};
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',person});
});

router.get('/profile',function(req, res){
	res.render('profile',{person});

});

router.get('/add',function(req, res){
	res.render('add', {add: 'Add'});

});
router.get('/edit',function(req, res){
	res.render('edit', {edit: 'edit'});

});

module.exports = router;
