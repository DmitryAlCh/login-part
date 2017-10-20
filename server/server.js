const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const chalk = require('chalk');


const bodyParser = require('body-parser');
const {getRegisteredUsers} = require('./utils/get-registered-users');
const {findEntry} = require('./utils/find-user');
const {compareCookies} = require('./utils/compare-cookies');

const signInCookie = {
  "name": "session",
  "value": "jhfbdjhfbdhgfvdhgfv"
};

server = async () => {
  let LocalUsers = await getRegisteredUsers(__dirname+'/users.txt');
  requireLogin = (req, res, next) => {
    let onlineCookie=req.cookies;
    if (compareCookies(signInCookie, onlineCookie)) {
      next();
    } else {
      res.status(401).sendFile(__dirname + '/views/invalid-password.html');
    }
        
  }
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());

  app.get('/', function(req, res){
    res.cookie("randomName","RandomValue", {maxAge: 36000});
    res.sendFile(__dirname+'/index.html');
  });

  app.all('/login/*', requireLogin, function(req, res, next) {
    next();
  });

  app.post('/login', async function(req, res) {
   
    console.log(req.body.login);
    let user = req.body.login[0];
    let passw = req.body.login[1]
    let registeredUsers = await getRegisteredUsers(__dirname + '/users.txt');
    let foundRegUser = await findEntry(user, registeredUsers);
    if (!foundRegUser){
      res.status(401).sendFile(__dirname + '/views/user-not-found.html');  
    } else {
      if (foundRegUser.password!=passw){
        res.status(401).sendFile(__dirname + '/views/invalid-password.html');  
      } else {
        res.cookie(signInCookie.name,signInCookie.value, {maxAge: 36000});
        res.redirect('/login/data');
      } 
    }

    app.get('/login/data', async function(req, res) {
      res.sendFile(__dirname + "/views/data.html");
    });
    
  });
  
    app.listen(3000, function(){
    console.log('listening on *:3000');
  });
}

module.exports = {
  server
}