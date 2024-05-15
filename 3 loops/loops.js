
// var sum = 0;
// for (var i = 1; i <=10; i++) {
//  debugger;
//     sum = sum+i;
//     console.log(sum);
    
// }

// for (var i = 1; i < 10; i++) {
//     var result = i * 2;
//     console.log(result);
// }

var i=1;
while (i<=10){
    var result = i * 2;
    console.log(result);
    i++
}

const arr=[1,2,3,4,5];
arr.length=3;
console.log(arr);

const fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

fruits [2]= 'pear';
console.log(fruits);

fruits[3]=`lemon`;
console.log(fruits);


let arrNme = [ 'Apple', { name: 'John', city:'Nashik', pin:12344 }, true, function() { alert('hello'); } ];
console.log(arrNme[3]);

let fruits1 = ["Apple", "Orange", "Plum"];
console.log(fruits.length-3);
fruits1.push('nwefl');
fruits1.shift();
fruits1.unshift(`kiran`);

console.log(fruits1);

let box = ["Apple", "Orange", "Pear"];

for(let i=0; i<box.length; i++){
    console.log(box[i]);
}


// for in loop

let box2=["ina", "Mina", "dika", "sita", "rtia", "sdfff", "sdff"];
for( let key in box2){
    console.log(box2[key]);
}
//

let  jam =[];
jam[1] ="chappal";
console.log(jam.length);
//

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[2]);

// 

let maxi = [1,2,3];
console.log(maxi);
console.log(String(maxi)===`1,2,3`);
//

console.log( [] + 1 );
console.log( [1] + 1 );
console.log( [1,2] + 1 );
//
let boxes = ["Apples", "Pear", "Orange"];
let moreboxes = boxes;
moreboxes.push("banana");
console.log(boxes.length);
//
let arr = ["a", "b"];
arr.push(function(){
    console.log(this);
})
console.log(arr.push("one"));



