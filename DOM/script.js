// document.getElementById("title").textContent = "welcome";

// let para = document.querySelector("p");
// para.textContent = "four";

// document.getElementById("box").innerHTML = `<h2> Hello js </h2>`

// let btn = document.querySelector('button')
// btn.addEventListener("click", function (event) {
//     console.log(event.target);
//     console.log(event.type);
// });

// Event Bubbling
// let parent = document.getElementById("parent");
// let btn = document.getElementById("btn");

// parent.addEventListener("click", function () {
//     console.log("Parent");
// });

// btn.addEventListener("click", function () {
//     console.log("Button");
// });

// Click-Event
// let bt = document.querySelector("#btn");

// bt.addEventListener("click",function(){
//     console.log("clicked")
// })

// Input Event
// let input = document.getElementById("name"); 
// input.addEventListener("input", function () { 
// console.log(input.value); 
// });

// Submit Event
// let form = document.getElementById("myForm"); 
// form.addEventListener("submit", function (event) { 
// event.preventDefault(); 
// console.log("Form Submitted"); 
// });

// mouse event
// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", function () { 
// console.log("Mouse Entered"); 
// }); 

//Event-Delegation
// let list = document.getElementById("list");

// list.addEventListener("click", function (event) {
//     console.log(event.target.textContent);
// });

// let a = [1, 2];
// let b = [3, 4];

// let result = [...a, ...b];

// console.log(result);


// let name = "dikshya";
// console.log(`Hello ${name}`); 

export function greet() {
    console.log("Hello");
}
