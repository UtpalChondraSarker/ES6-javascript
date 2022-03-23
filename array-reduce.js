var numbers=[1,2,3,4,5,6,7,8];
var result=numbers.reduce((previouseValue,currentValue,index,array)=>{
   return previouseValue+currentValue;

},0)
console.log(result);