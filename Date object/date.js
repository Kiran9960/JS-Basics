//  console.log(new Date());

// let today = new Date(1984,5);
// let today = new Date(13,5,1984);




// const milisec= today.getMilliseconds;

// const milliseconds = 16320;
// // let today = new Date(13,5,1984,10,50,milliseconds);
// // console.log(today);


// const dateFromMilliseconds = new Date(milliseconds);
// console.log(dateFromMilliseconds);

let year = new Date().getFullYear();
let month=new Date().getMonth();
let time=new Date().getTime();
let hours=new Date().getHours();
let day=new Date().getDay();



// console.log(today);
// console.log(today1);
// console.log(today3);

let myDate = new Date();
console.log(day, month, year, time);

let setYear = new Date().toLocaleDateString();
let setMonth=new Date().setMonth();
let setTime=new Date().setTime();
let setHours=new Date().setHours();
let setDay=new Date().setDate();

// console.log(today3);
// console.log(setDay, setMonth, setYear, setHours);
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
// console.log(new Date().toLocaleDateString);