var numbers=[1,2,3,4,5,6,7,8,9,10]


var result=numbers.filter((currentValue,index,arry)=>{
    //console.log(index);
    //console.log(arry);
    return currentValue>4;
})
console.log(result);