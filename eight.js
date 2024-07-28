//Events --- change in state of object ---intresting changes

//Mouse events-- keyboards--- 

//Onclick
// let btn=document.querySelector("#btn");
// btn.onclick=()=>{
//     console.log("btn was clicked");

// };

//Mouse over 
/*
let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are on div")
}
*/

// Event object --details about the event
//all event handlers have access to event objects properties and methods

let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}