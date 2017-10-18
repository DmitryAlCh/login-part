// Read local txt file, returns JSON.
const fs = require('fs');


getRegisteredUsers = async (pathToFile) => {
    return new Promise((resolve,reject) =>{
        fs.readFile(pathToFile, 'utf8', (err, data) => {
            if(err){
                console.log(err);
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
    
}

module.exports = {
    getRegisteredUsers
}