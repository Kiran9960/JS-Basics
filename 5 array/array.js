
// const array = persons  [ `""` ]


// non premeitve data type 
// hold multiple datatypes, numbers, string, object, buleans,
// const students=["Hari", "Ram", ]
// Empty arrey []



//  const fruits=  ["apple", "banana", "mango", "Grapes" ]

//  console.log(typeof(fruits), fruits.length);

//  console.log( fruits.at(-3));

// modify array

// for of loop
// for in loop
// forEatch(()=>{})

 // retrive value at index  
 // for of loop

const students = [ "Ram", "Sham","Nilesh", "Rakesh"]

 for (let student of students){
    console.log(student)

 }


 // retrive index 
 // for in loop
 const students1 = [ "Ram", "Sham","Nilesh", "Rakesh"]

 for (let children in students){
    console.log(children);

 }


// // forEatch(()=>{}) loop

const fruits=  ["apple", "banana", "mango", "Grapes" ]

fruits.forEach(( val, index) => { 

console.log(val);
console.log(index);
// console.log(arr);

});


// Map function 
// array. forgach((element) => { });
// array-map ((element)=>);

// array. forgach((element, index, arrey) => { });


const fruits2=  ["apple", "banana", "mango", "Grapes" ]

fruits2.map ((currentElement, elementIntex, entireArray)=>{

    // console.log(currentElement,elementIntex,entireArray);

})




// const fruits3=  ["apple", "banana", "mango", "Grapes" ]

// fruits2.map ((currentElement, elementIntex, entireArray)=>{

//     // console.log(currentElement,elementIntex,entireArray);

// })

// const garden= fruits3.map((elementIntex)={


// })

// CRUD operation 



const persons = [ "Ram", "Sham","Nilesh", "Rakesh"]

persons.push("Kiran"); // add val at end 

persons.unshift("John"); // add val at beggining 

persons.pop(); // remove from last 
persons.shift(); // remove from start 

console.log(persons);





// //todo Practice Time
// 1/1 write a program to Multiply each element with 2 const numbers - [1, 2, 3, 4, 5]B
// // forEach - Performs an action on each element
// // map -
// Creates a new array with transformed elements


const Newfruits=  ["apple", "banana", "mango", "Grapes" ]
Newfruits.splice(1);
// console.log(Newfruits.splice(1))
console.log(Newfruits)


const year = [ "Jan", "Feb","Mar", "April","May","June","July","August","September","October","November",]

year.unshift("December");


console.log(year);











