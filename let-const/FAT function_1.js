


 ///// arrow function /////

const sum2 =(a,b) => {console.log(`sum of ${a} and ${b} is ${a+b}`)};

sum2(3,5);


/////  calculate simple interest //////

const calcSimpleInt = (princiapl, rate, time ) => {console.log( `Simple interst of principal amount ${princiapl} on interest rate ${rate} for duration ${time} is ${princiapl * rate * time /100}`) }
calcSimpleInt( 100000, 12, 10);

/////  Table of two//////
const tableOfNumber = (a) => { 

        for (i=1; i<=10; i++)
         
         { let myNum = i *a; 
          console.log(`${a} x ${i} = ${myNum}`)

            } 
}

tableOfNumber(18);


