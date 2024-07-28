//Array -collection of same data type of elements;
/*let marks=[34,56,75,34,78]
console.log(marks);*/
//console.log(marks.length);


//Array indces         string-immutabale,array-mutable

/*let marks=[90,87,67,78,88];
console.log(arr[3]);*/

//loops
//for loops
/*
let heros=["iron","man","hulk","thor"]
for(i=0;i<heros.length;i++){
    console.log(heros[i])
}*/

//for of loops
/*
let cities=["hydrabad","gurugram","noida","delhi"];
for(let city of cities){
 */

//for in loops
/*
let birds=["sparrow","eagle","duck","parrot"];
for(let bird in birds){
    console.log(bird);
}*/

//question 1
/*
let arr=[85,97,44,37,76,60];
size=arr.length();
let sum=0;
for(let i of arr){
    sum+=i;
}
let avg=sum/size;
console.log(avg);
*/
//question2

//arr=[250,645,300,900,50];
// let i=0;
// for(let val of arr){
//     console.log(val);
//     let offer=val/10;
//     arr[i]=arr[i]-offer;
//     val++;
// };
// console.log(arr);
/*
let items=[250,645,300,900,50];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;

}
console.log(items);
*/

//Array Metods

//push--add to end
//pop-- delete fron end &return
// to string --arrary to string
// concat- joins multiple array & return result;
//unshift -add to start
// shift-- delete from start & return
//slice--return a  piece of array
//splice-change in original arry (add,remove,replace)

let arr=[1,2,3,4,5,6,7];
let res=arr.splice(2,2,101,102);
console.log(res);



