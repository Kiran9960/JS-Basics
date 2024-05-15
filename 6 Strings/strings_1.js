let userName = "Kiran Pingle, Maharashtra, india, kiran, kiran kiran "

// get string length
console.log(userName.length);
// exclude special string characters 
let myAddress="At Post: Makhamalabad, \"Panchvati Nashik\" post"
console.log(myAddress);

// get index of specific character 
console.log(myAddress.indexOf(`ost`));

// get lastIndexOf looking for index from last  
console.log(myAddress.lastIndexOf(`ost`));

//get the element at the index 
console.log(myAddress.at(1));

// search in string
console.log(myAddress.search('Post'));

//search string with matching characters gives array
console.log(myAddress.match('Post'));

// match method gives all matching elements if added gi, if added i gived only first matched index 
console.log(myAddress.match(/post/gi));

//matchAll method returns object .
console.log(`ok` );
let newPlace = userName.matchAll(/kiran/gi);
console.log(typeof(newPlace));
console.log(Array.from(newPlace));

// includes() method check if value is present in array or not and retuens boolean values
console.log(myAddress.includes( 'post'));

//checks of string starts with or ends with value or not returns boolean value 
console.log(myAddress.startsWith( 'A')); // retuns true;
console.log(myAddress.endsWith( 'A')); // retuns false;

// Repalce string methods 
let info = " Hi welcome aboard we will be sailing towards north pole for next 8 months, mango tango mango mango tango     "
// replaces first value with next value
console.log(info.replace('Hi',`Hello Kiran`));
//replace all matching string values and replace with second value 
console.log(info.replaceAll('tango', `rambo`));

// shows character at the index passed, accepts only positive values 
console.log(info.charAt(1));
// shows ASSCI code of character at the index
console.log(info.charCodeAt(1));

//convert entire string to upper case or lower case 
console.log(info.toUpperCase());
console.log(info.toLowerCase());

// text trim removes blank spaces from start and end positions 
console.log(info.trim());

// consvert stings to array 
console.log(typeof(info));
console.log(info.split(" "));
console.log(typeof(info));
console.log(info.split(" ").reverse());

console.log(info.split(" ").reverse().join(" "));


// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram(`dog`));

// 1: Write a JavaScript function that prints the letters 'a' through
// 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

function printLetters (){

    for(i=97; i<=122; i++ ) {
        let item=String.fromCharCode(i)
        // let item=charCodeAt(i)

       console.log(item);

    }
}
printLetters();

// 2: Write a function to count the number of vowels in a string?
// 3: Write a function to check if all the vowels presents in a string or not?




// Write a JavaScript function isPangram 
//that takes a string as input and returns true if the string is a pangram (contains all letters of the alphabet) and false otherwise.
// The function should be case-insensitive and ignore spaces.
// Constraints:
// 1: The input string will consist of alphabetic characters and spaces.
// 2: The function should handle both uppercase and lowercase letters.
// 3: Consider the English alphabet with 26 letters.

function isPangram(str){

    if(typeof(str)!==`string`){
        console.log(`${str} is not a string`);
        return false;
    }else{
        str.toLowerCase();
    }
   
   const abcd = 'abcdefghijklmnopqrstuvwxyz'.split(``);
        abcd.forEach((el of abcd)=>{
        //    let newarr=[].push(el);
           console.log(el);
           return ;
        });
console.log(abcd.Array,  typeof(abcd));
};

console.log(isPangram(`kiran`));


// if(str.includes(newarr)){
//     console.log('success');
//     return true;
// }else{
//     console.log('Negetive ')
//     return false

// }





