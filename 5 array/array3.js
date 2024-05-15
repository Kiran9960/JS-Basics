// HOME WORK 

const fruits=[ 'banana', 'orange','pineapple', 'apple']

const newFruits = fruits.filter((fruit)=>{
  
  return fruit ==="banana";

});
console.table("Filter fruits");

console.table(newFruits);

//////// ****** get user names array ***** //////

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

const userNames = users.map((a)=>{

  return a.name

})
console.log("get user names array");
console.table(userNames);


//////// ****** ***** //////
// write programe to multiple each number with 2

// create new array with using map method on existig one 

const myNumbers=[1,3,5,7,9];
const newNumbers = myNumbers.map((number) => {

  return number * 2

});
console.log("filtering freelancers with JavaScript as a skill set.");
console.table(newNumbers);


//////// ****** ***** //////
// filtering freelancers with JavaScript as a skill set.   
let freelancers = [

{name: "Harry", skill: "JavaScript"},
{name: "Mark", skill: "Python"},
{name: "John", skill:"JavaScript"},
{name: "James", skill:"content writer"}

];
const filteredFreelancers = freelancers.filter((freelancer)=>{

  return freelancer.skill==="JavaScript";

})
console.log("filtering freelancers with JavaScript as a skill set.");
console.table(filteredFreelancers);

//////// ****** ***** //////
// code applyies a 20% raise to the employees salaries : 
// const salaries =[60000, 55000, 75000, 65000];

const salaries =[60000, 55000, 75000, 65000];

const Newsalary = salaries.map((salary) => {


  return (salary * 20) / 100 + salary;
  

});
// console.table("Old salaries");
// console.table(salaries);

console.table("20% Increased salaries");
console.table(Newsalary);

//function generates a new string combining their last and first names along with their position in the queue:
const customers = [
  {firstName : "Johan", surname: "Doe"},
  {firstName : "Jane", surname: "Client"},
  {firstName : "Bobby", surname: "Person"}
];

const newCustomers = customers.map((customer)=>{

//   return customer.firstName.concat(` ${customer.surname}, `);
return (`${customer.firstName} ${customer.surname} `);

})
console.table(customers);

console.log("customers with full name ");
console.table(newCustomers);

///// Using the map method, write a function that takes an array of 
// numbers and returns a new array where each number is squared, but 
// only if it's an even number.

const simpleNumbers= [1,2,3,4,5,8,16];

const newNum = simpleNumbers.map((number)=>{

    if(number % 2 === 0 ){

       let numberx = number * number;

       return numberx;

  } else{
       return number;

    }

})
console.table("Original numbers ");
console.log(simpleNumbers);

console.table("squared numbers ");
console.log(newNum);

///// Using the map method, write a function that takes an array of 
// names and returns a new array where each name is prefixed with "Mr”.

const allMen = ["John","Mark", "Peter","Kalu", "Motu","Golu" ];

const newMen =allMen.map((man)=>{

  let prefix = "Mr. ";
  return prefix + man;


});
console.table("all men");
console.table(allMen);

console.table("New men");
console.table(newMen);

