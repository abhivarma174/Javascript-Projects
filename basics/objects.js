const JsUser={
    name:"abhi",
    age:20,
    lastloginDays:['sunday','Monday']
}
const mySym=Symbol("key1");
const JsUser1={
    name:"abhi",
    [mySym]:"mykey1"
}
//console.log(JsUser1[mySym]);
//console.log(typeof mySym);

const user={
    name:"abhi",
    fullname:{
        firstname:"varma",
        middlename:{
            surname:"Ramineni",
        }
    }
}
console.log(user.fullname.middlename.surname);

//COMBINING TWO OBJECTS INTO SINGLE OBJECT
const obj1={1:'a',2:'b'};
const obj2={3:'c',4:'d'};
//const obj3={obj1,obj2};
//console.log(obj3); //same as array problem
//const obj3=Object.assign({},obj1,obj2);
//console.log(obj3);

/*Mostly used syntax is*/
const obj3={...obj1,...obj2};
console.log(obj3);

const tinderUser={};
tinderUser.name="abhi";
tinderUser.id=243;
tinderUser.email="abhivarma@gmail.com";
console.log(tinderUser);

console.log(Object.values(tinderUser));//Important for DOM
