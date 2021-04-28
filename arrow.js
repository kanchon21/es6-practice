// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num *2
// }

// const doubleIt = num => num * 2;

// const result = doubleIt(12);
// console.log(result);

const add =(x ,y, z) => x + y + z;

const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(4, 6, 8);
const result2 = give5();
const result3 = doMath(20, 10);
console.log(result3);