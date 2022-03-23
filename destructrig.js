const user={
    id:'1',
    name:'utpal',
    age:'21',
    eduction:{
        ssc:'dhaka borad',
        result:'4.32',
    }
}
// object teke name take ber kore ano arkta veriable a assign korte cai jeno ano arkta jagai use korte pari
//var result=user['name']
const {name:title,age}=user
console.log(title,age);

const {eduction:{ssc}}=user;
console.log(ssc);