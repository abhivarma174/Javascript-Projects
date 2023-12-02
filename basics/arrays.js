const myArr=[0,1,2,3,4,5];
const myArr2=new Array(1,2,3,4,5);
//console.log(typeof myArr);
//console.log(typeof myArr2);
myArr.push(6);
//console.log(myArr);
const myArr3=myArr.join();
//console.log(myArr3);
const myArr4=myArr.slice(1,3);
//console.log(myArr4);
//console.log(myArr);
const myArr5=myArr.splice(1,3);
//console.log(myArr5);
//console.log(myArr);


const marvel_heroes=["ironman","thor","spiderman"];
const dc_heroes=["batman","flash","joker"];
//const all_heroes=marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);
//const all_heroes=marvel_heroes.concat(dc_heroes);
//console.log(all_heroes);
const all_heroes=[...marvel_heroes,...dc_heroes];
//console.log(all_heroes);

const newArr=[1,2,3,[4,5,6],7,[8,9,[10,11]]];
const result=newArr.flat(Infinity);
//console.log(result);

console.log(Array.isArray("abhi"));
console.log(Array.from("ABHI"));
