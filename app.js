// wrapper for all processes involved
const chalk = require('chalk');

const {getRegisteredUsers} = require('./server/utils/get-registered-users');
const {server} = require('./server/server');

startUp = async () => {
    // read needed local storage
    // startup the server
    // let users = await getRegisteredUsers(__dirname+'/server/users.txt');
    // console.log(users);
    server();
}

startUp();