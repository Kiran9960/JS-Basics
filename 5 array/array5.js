


let count = [1, 3, 5, 6, 7]

// Add 10 at the end of an array
console.log(count.push(10));
console.log(count);

// remove last element in the array 
count.pop();
console.log(count);

// add value as first element in array 
count.unshift(10);
console.log(count);

// remove first element in the array 
count.shift();
console.log(count);

// get the value from array 
console.log(count.at(-3));

// start from index, upto count , add value
count.splice(2, 2, 100);
console.log(count);

// sort array from small to big number
let mycount = [12, 500, 678, 237, 658, 245, 25, 2, 5, 19]
mycount.sort((a,b)=>{
  if(a>b){
    return 1;
  }else {
    return -1;
  }
});

console.log(mycount);
console.log(mycount.at(3));

// check if the value is present in the array or not
console.log(mycount.includes(5));


// mycount.map(0, 0, arr)=> {
  
//   let newCount1 = arr;
//   return console.log(newCount1);
// })
// console.log(mycount);

// show array index and element x 2 
const newCount = mycount.map((el,i)=>{

// return i, el *5;
return `${i} : ${el *5}`

})

console.table(newCount);

// show values less than 50
const rollNum = [ 123, 25, 64, 78, 2, 15]

let filteredRollNumber = rollNum.filter((val, i, arr)=>{

  return val > 50;
  

})
console.log(filteredRollNumber);


// Get new temprature 
const temprature = [ 12, 23, 32, 40]

const newTemp= temprature.map((el,i, arr)=>{

  let value = el-32*5/9;
  return value.toFixed();

})

console.log(newTemp.reverse());







