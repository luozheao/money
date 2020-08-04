let request  = require('request')
let time = new Date().getTime()
let startDate ='2018-11-26'
let endDate ='2020-08-03'
let fs = require('fs-extra')
let path =require('path')
let pageIndex =1
let pageSize =2000
request({
    url: `http://api.fund.eastmoney.com/f10/lsjz?callback=module.exports = &fundCode=000198&pageIndex=${pageIndex}&pageSize=${pageSize}&startDate=${startDate}&endDate=${endDate}&_=${time}`,
    method: "get",
    json: true,
    headers: {
        "Referer":"http://fundf10.eastmoney.com/jjjz_000198.html"
    }
}, function (error, response, body) {
    if(error){
        console.log(error)
    } 
    fs.writeFileSync(path.join(process.cwd(),'money','data.js'),body)
})