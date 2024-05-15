
// *** SORT **** /////

const fruits = [ 'bnana', 'apple ', 'mango', 'pineapple' ];
const fruits1 =fruits.sort();

console.log(fruits1);

const numbers=[12,56,23,85,23,67,18];

const myNum =numbers.sort((a,b)=>{

  if(a > b){
    return 1;
debugger
  }else if(a < b){

    return -1;
  }

});

console.log(myNum);


console.log (myNum[0]);
console.log (myNum[myNum.length-1]);
console.log (myNum.at(2));

// *** REDUCE **** /////
// Syntax
// Array.reduce((accumulator,current,index,Array)=>{},initialValue);

// Array.reduce((acc,curElem,index,arr) => {},initialvalue)
// Array.map((curElem,index,arr) => {});
// Array.filter((curElem,index,arr) => {})









