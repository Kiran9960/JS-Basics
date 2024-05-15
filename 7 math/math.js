// from Roshan.

const new1 = Math.PI;
function areaOfcircle (radius){
    const area = Math.PI * (radius * radius);
    return area;
}
console.log(areaOfcircle(10));

console.log(Math.abs(-5));

console.log(Math.round(3.7));

console.log(Math.ceil(3.7));

console.log(Math.floor(3.7));

console.log(Math.trunc(3.3));

console.log(Math.pow(2,5));

console.log(2**5);

console.log(Math.sqrt(25));

console.log(Math.log(2));

console.log(Math.log2(10));

console.log(Math.sign(-10));

console.log(Math.min(5,8,45,3,78,));

console.log(Math.max(5,8,45,3,78,));

console.log(Math.random());

function generateOtp(userName){
    const newuserName = userName;
    const otp = Math.round(Math.random() * 100000);
    console.log(`${newuserName} Your 5 Digit OTP Is : ${otp}`);
}
generateOtp("Roshan");