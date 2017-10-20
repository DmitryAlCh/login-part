// etalonCookie.name = "name"; etalonCookie.value = "value"
const chalk = require('chalk');

compareCookies = (etalonCookie, onlineCookie) => {
    if ((typeof etalonCookie != 'object') && (typeof onlineCookie != 'object')) {
        console.log(chalk.red(' typesOF provided Cookieobjects are not objects'));
        return false;
    } else {
        let keysArr = Object.keys(onlineCookie);
        let index = keysArr.findIndex((e) => {
            return e === etalonCookie.name;
        });
        if (index < 0) {
            console.log(chalk.red('Cookie name not found'));
            return false;
        } else {
            let valuesArr = Object.values(onlineCookie);
            if (valuesArr[index] != etalonCookie.value) {
                console.log(chalk.red('cookie values not match'));
                return false;
            } else {
                console.log(chalk.bgGreen('Cookie name and value match!'));
                return true;
            }
        }
    }
};



module.exports = {
    compareCookies
}