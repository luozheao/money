let data = require('./data')
 
let list = data.Data.LSJZList
let dateToMoneyMap = new Map()
list.forEach(p=>{
    dateToMoneyMap.set(new Date(p.FSRQ).getTime(),p.DWJZ)
})

 

let deal=[
    {
        start:'2018-11-26',
        end:'2019-05-26',
        money:42000
    },
    {
        start:'2019-05-27',
        end:'2019-07-23',
        money:292657
    },
    {
        start:'2019-07-24',
        end:'2019-07-28',
        money:188314
    },
    {
        start:'2019-07-29',
        end:'2020-01-21',
        money:15724
    },
    {
        start:'2020-01-22',
        end:'2020-08-03',
        money:49380
    }
]

let Money_402=[
    {
        start:'2019-05-22',
        end:'2019-06-24',
        money:5000
    },
    {
        start:'2019-06-25',
        end:'2019-12-20',
        money:2000
    }
]

let Money_703=[
    {
        start:'2020-01-22',
        end:'2020-04-05',
        money:6174
    }
]
let Money_801=[
    {
        start:'2018-11-26',
        end:'2019-05-26',
        money:3000
    },
]

function getInterest(startDate,endDate,money){
        let sum = 0
        let i=0
        let day = 24*60*60*1000
        let startTime = new Date(startDate).getTime()
        let endTime =  new Date(endDate).getTime()
        let addTime =  startTime
        while(addTime<=endTime){
            i++
            sum+= dateToMoneyMap.get(addTime)*money/10000
            addTime = startTime+day*i
        }
        return sum
}
let sumArr = deal.map(p=>{
    return getInterest(p.start,p.end,p.money)
}) 
let sumArr_402 = Money_402.map(p=>{
    return getInterest(p.start,p.end,p.money)
}) 
let sumArr_703 = Money_703.map(p=>{
    return getInterest(p.start,p.end,p.money)
}) 
let sumArr_801 = Money_801.map(p=>{
    return getInterest(p.start,p.end,p.money)
}) 

let sumVal=0
 sumArr.reduce(function(sum,p){
    sumVal+=p
},0)
console.log(sumVal-10.6326-22.25914000000001-28.32995466- 36.43667999999998)
 