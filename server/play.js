let objects = {
    "RandomName": "randomValue",
    "neededName": "neededValue",
    "someName": "someValue"
};

let cookie = {
    "name": "neededName11",
    "value": "neededValue"
};

const {compareCookies} = require('./utils/compare-cookies');

compareCookies(cookie,objects);

// let keysArr = (Object.keys(objects));
// let valuesArr = (Object.values(objects));

// let index = keysArr.findIndex((el) => {
//     return el === cookie.name;
// });
// console.log('The index value: ', index);
// if (index >= 0) {
//     console.log('Found the cookie:');
//     console.log('Cookie name: ', keysArr[index]);
//     if (valuesArr[index] == cookie.value) {
//         console.log('Cookie value matches ', valuesArr[index]);
//     } else {
//         console.log('Cookie value is incorrect: ');
//         console.log(cookie.value + ' is not equal to ' + valuesArr[index]);
//     }
    
// } else {
//     console.log('Cookie not found');
// }

// // console.log(keysArr);
// // console.log('Index of CookieName: ', index);
// // console.log(Object.entries(objects));