//function & method
//a block of code perform a specific task  ,can be invoke anytime.

/*
function myfunction(){//input --parameter
    console.log("hi dear");
}
myfunction();
*/
//sum of two number
/*
function sum_of_two(a,b){
    console.log(a+b);
}
sum_of_two(2,5);
*/

/*
function sum(a,b){     //paramerter -local variable
    s=a+b;
    return s;
}
let val=sum(4,5);
console.log(val);
*/


//Arrow functions
/*
const fun=(a,b)=>{
    console.log(a+b);

}
fun(78,87);
*/

//Question 1
// function cstring(str){
//     let c=0;
//     for(let char;char<str.length;char++){
//         if(char=="a"|| char=="e"||char=="o"||char=="i"||char=="u"){
//             c++;

//         }
//     }
//     console.log(c);
// }
/*
function cstring(str){
    let c=0;
    for(let char of str){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            c++
        }
    }
    return c;
}*/

//for each loop in arrays--call back function
/*
arr=[1,2,3,4,5];

arr.forEach(function myfun(num){
 console.log(num);

});
//higher order funtion? Ans -take other function as parameter
*/

//Question 
/*
arr=[1,2,3,4]
arr.forEach(function print(val){
    console.log(val*val);
});
*/

//Map method --similar to for each method--to create a new arr.
/*
arr=[23,45,56,77,34];
arr.map((val)=>{
    console.log(val);
});
*/

//filter method
/*
arr=[1,2,3,4,5,6,7,8];
let even=arr.filter((val)=>{
    return val>3;
});
console.log(even);
*/

//Reduce array-perforn some operation & reduces to a single Value. it return that single value

// let arr=[1,2,3,4,5];
// const output=arr.reduce((res ,cur)=>{
//     return res+cur;
// });
// console.log(output);

//max element
/*
let arr=[1,2,3,4,5];
const output=arr.reduce((res ,cur)=>{
    return res>cur ?res:cur;
});
console.log(output);
*/

//Question 1
arr=[87,93,64,99,86];
const output=arr.filter((val)=>{
    return val>90;
});
console.log(output);