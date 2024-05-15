let str= "Kiran Pingle "
console.log(str.length);

let myName = "Myself is \"Kiran Pingle\" and \\ I a \"Designer\"";
console.log(myName)


let place = "Mumbai is capital of maharashtra OF capital";
console.log(place.indexOf("of"));
console.log(place.lastIndexOf("of"));
console.log(place.at(1));
console.log(place.search("capital"));
console.table(place.match(/capital/));
console.log(place.matchAll('Cap'));

// global and case sensitive matchAll(/Capital/gi)
let myPlace =place.matchAll(/Capital/gi);

console.log(Array.from(myPlace));

console.log(place.includes("go"));

//
console.log(place.startsWith('Mum'));
//
console.log(place.endsWith('Mum'));

//slice(start, end); slice(start, [blank]); 

console.log(place.slice(10, 20));
let x = place.slice(10, 20)
console.log(typeof(x));

//subString() starts from 0 or positive values only

console.log(place.substring(21,8));

// Repalce string methods 
let text= "Hello Javascript Welcome to server side javascript scripting"
console.log(text.replace("javascript", "Python"));
console.log(text.replaceAll("Javascript","Python"));

// accepts only positive index values 
console.log(text.charAt(0));
// find ASCCI code of characters 
console.log(text.charCodeAt(0));

console.log(text.toUpperCase());
console.log(text.toUpperCase());

// Trims blank spces from start and end of sting 
console.log(text.trim());

// conver string to array 
// console.log(text.split( " " ));
// console.log(text.split( " " ).reverse());

console.log(text.split(",").reverse().join());
console.log(text.split(",").reverse().join());
console.log(text.split(",").reverse().join());
console.log(text.split(",").reverse().join());
//
