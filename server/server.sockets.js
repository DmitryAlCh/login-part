var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
const {getRegisteredUsers} = require('./utils/get-registered-users');
const {findEntry} = require('./utils/find-user');


server = async () => {
  let LocalUsers = await getRegisteredUsers(__dirname+'/users.txt');
  
  app.use(bodyParser.json);
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  });

  app.post('/signed', function(req, res) {
    console.log(req.body);
    res.send('<h1>succses</h1>');
  })
  
  io.on('connection', async (socket) => {
    console.log('User connected');
    socket.on('form-submit', async (msg) => {
      console.log('User submited info:');
      console.log(msg);
      // check if user exists
      let existingUser = await findEntry(msg.userName, LocalUsers);
      if (!existingUser) {
        console.log('User not found')
        io.emit('login-message', 'User not found');
      } else {
        // check for password
        if (msg.password != existingUser.password){
          io.emit('login-message', 'incorrect password');
        } else {
          io.emit('login-message', 'succesfully loged in');
        }
      }  
    });
  });
  app.get('/signed', function(req,res) {
    res.sendFile(__dirname+'/index.html');
  });
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
}

module.exports = {
  server
}