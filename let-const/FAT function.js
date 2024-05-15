let num = 5;

console.log(`5 x ${num} = ${5* num}`);

for (let i = 1; i <= 10; i++) {
  let count = i * 2;
    console.log(`2 x ${i} = ${i * 2}`);
  }


  ///// default paramenter 

  function sum (a,b=5){

     console.log(a+b);
     return

  } 
sum(2)

 ///// arrow function /////


function prod(a,b){
    console.log( a+b);
}

const prod2 =() => { console.log(`arrow function`)}

prod2();



const prod3 =( message) => { console.log(`${message}`)}

prod3(`ok`);



const prod4 =( a,b) => { console.log(`sum of ${a} and ${b} = ${ a +b }`)}

prod4(2,4);


const prod5 =(a) => { console.log(`Square of ${a} is ${ a * a }`)}

prod5(2);