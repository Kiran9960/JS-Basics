

console.log(`Practice Time`)

const numbersCollection = [1,2,3,4,5,6,7,8,9,10];
console.log(numbersCollection);

/// foreach on numbersColection
console.log(`foreach on numbersColection`)

numbersCollection.forEach((num) =>{
   newNum = num*2;
   console.log(newNum);
})

/// Map on numbersColection
console.log(`Map on numbersColection`)

numbersCollection.map((numbers, locations, arr) =>{

   // console.log(`${numbers},on index  ${locations}`);
   const NewNumbers = numbers * 2;
   console.log(`Map on numbersColection: [${NewNumbers}]`)
   
})

/// Creates a new array with transformed elements
console.log(`new array with transformed elements`)

const newNumbersCollection = numbersCollection.map((numbers, locations, arr) =>{

// ****************console.log(`${numbers},on index  ${locations}`);

   const NewNumbers = numbers * 2;
   return NewNumbers;
   
})

console.log(`transforemd array:[${newNumbersCollection} ]`);


// **************** Splice method 


const Newfruits=  ["apple", "banana", "mango", "Grapes" ]
Newfruits.splice(1);
// ****************console.log(Newfruits.splice(1))
console.log(Newfruits)


const year = [ "Jan", "Feb","Mar", "April","May","June","July","August","September","October","November",]

year.push("December");

console.log(year);


// **************** add element with splice() method 

const year2 = [ "Jan", "Feb","Mar", "April","May","June","July","August","September","October","November",]

year2.splice(10, 1, "December");

console.log(year);

// **************** add element with splice() method 

const year3 = [ "Jan", "Feb","Mar","April","May","June","July","August","September","October","November",]

year3.splice(year3.length,0,"December");
console.log(year3);

// ****************n add element with splice() method 

year3.splice(2,1,"March");
console.log(year3);


// ****************n Remove element with splice() method 

year3.splice(2,1);
console.log(year3);


// *************   SEARH METHOD  ************************
// indexOF(searchElement);

console.log(`Search method`);

// find Index from first index 
console.log(year3.indexOf("April"));

// LastIndex of: checks from end to start 

console.log(year3.lastIndexOf("June"));

// includes checks if element is available in the array, returns boolean "True/False"

console.log(year3.includes("May"));

// *************   FILTER METHOD  ************************


// const price = [2,5,20,50,27,57]

// const newprice = price.map((price, locations, arr)=>{

//    const newprice = price;
//    return  newprice;


// });

// console.log(newprice);

// *************   FILTER METHOD  ************************


const price = [2,5,20,50,27,57]

const newprice = price.filter((price, locations, arr)=>{

   const newprice = price >=20;
   return  newprice;


});
console.log(newprice);

// *************   To-do / FILTER Unique numbers ************************

// TODO 









 




