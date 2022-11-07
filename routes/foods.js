const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const foods = require('../modules/food');
const url = require('url');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('food', { title: 'Food Service' });
});

// can process any existing query paramters (e.g.:?firstname=John)
router.get('/foods', (request, response, next) => {

  let get_params = url.parse(request.url, true).query;
  console.log('got into foods');
  console.log(foods.list());
  console.log(request.url);

  if (Object.keys(get_params).length == 0) {
    console.log('no params');
    response.setHeader('content-type', 'application/json');
    
    console.log(foods.list());
    response.end(JSON.stringify(foods.list()));
  } else {
    let key = Object.keys(get_params)[0]; // get first parameter only
    console.log("First key is: " + key);
    let value = request.query[key];
    console.log('params ' + value);
    try {
      let result = foods.query_by_arg(key, value);
    } catch (err) {
      console.log("Caught exception.");
      //createError(500);
      res.status(500).send('Something broke!');
    }
    let result = foods.query_by_arg(key, value);
    if (result) {
        console.log(result);
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  }
});

// example for using path variable
router.get('/foods/:location', (request, response, next) => {
    console.log(request.params);
  const param = request.params.location;
  console.log('got into /foods/:location ' + param);

  const modifiedResult = foods.modifyPrice(param);

  console.log("Modified " + modifiedResult);

  if (modifiedResult) {
    
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(modifiedResult));
  } else {
    next(createError(404));
  }


});

module.exports = router;


