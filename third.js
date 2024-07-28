//loops-excute a piece of code again and again
/*
for(let i=0;i<=6;i++){
    console.log("hi sara");
}*/

//calculate sum 1to 10
/*let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;

}
console.log("sum=",sum);*/

//infinte loop
//for(i=1;i>=0;i++)

//while loop
/*
let i=1;
while(i<=5){//condition check first;
    console.log("jo");
    i++;
}*/

//do while
/*let i=2
do{
    console.log("hi");
    i++;
}while(i<19);
*/

//for of loop
/*
let str="apna ollege";
let size=0;
for(let i of str){  //iterator -> character
    console.log(i);
    size++;

}
console.log(size);*/


// for in loop
/*
let student={
    name:"rohal",
    age:23,
    cgpa:9,
};
for(let key in student){
    console.log(key,student[key]);
}*/

//question
/*
let num=0;
for(let i=0;i<=100;i++){
    if(num%2==0){
        console.log("Even");
    }
    num++;
}
    */
/*
for(let n=0;n<=100;n++){
    if(n%2==0){
        console.log(n)
    }
    
}*/
//question 2
/*
gameno=13
userno=prompt("enter your no");
while(gameno !=userno){
    userno=prompt("you guess wrong no,gess again");
}
console.log("congratulations! ");
*/

//string
// let str="foa"
// console.log(str[2]);

//literals
// let obj={
//     item:"pen",
//     price:20,
// };
// let output ='the cost of ${obj.item} is ${obj.price} rupees';
// console.log(output);
//console.log("the cost of",obj.item,"is", obj.price,"rupees");


//escape -- \n break and start with new line.


//string method 


//uppercase(make capital letter)
/*
let str="kalua";
str=str.toUpperCase();
console.log(str);*/


//lowercase(make small letter)
/*
let str="kalua";
str=str.toLowerCase();
console.log(str);*/

//trim--remove whitespace
/*
let str="n    nak  dkam "
str=str.trim();
console.log(str);
*/

//slicing
/*
let str="kalia";
str=str.slice(2,4);
console.log(str);*/

//concatinate--add two string

//replace --- replacing one string to another;

//charAt(idx)---return char at any index;



//question

let fullname=prompt("enter name");
let username='@'+fullname+fullname.length;
console.log(username);