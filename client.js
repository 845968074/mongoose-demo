const request = require('request');
let login=require('./HTML/login.html');
function onClick() {
    let userName = document.getElementById('inputStuID').value;
    let userPassword = document.getElementById('inputPassword').value;
    console.log(userName);
    alert(userName);
    let option = {
        url: "http://localhost:3000/login",
        method: "post",
        json: true,
        body: {'name': userName,'password': userPassword}
    };
    console.log(option);
    requset(option,function (error,response,body) {
        alert(body);
    });
    console.log('123456');
}
