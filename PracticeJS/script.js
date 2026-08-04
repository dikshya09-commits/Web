// Practice Question - Conditional statement
// (Ques 1) Do numbers me bada number print karo.
// let a = 10;
// let b = 20;

// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// (Ques 2) Teen numbers me sabse bada number print karo.
// let a = 10;
// let b = 20;
// let c = 30;

// if(a>b && a>c){
//     console.log(a);
// }else if(b>a && b>c){
//     console.log(b);
// }else{
//     console.log(c);
// }

// (Ques 3) Check karo number 10 ke equal hai ya nahi.
// let a = 10;
// if(a == 10){
//     console.log("This no is equal to 10")
// }else{
//     console.log("This no is not equal to 10")
// }

// (Ques 4) Check karo year leap year hai ya nahi.
// let year = 2024
// if( year % 4 == 0){
//     console.log("leap year");
// }else{
//     console.log("not leap year");
// }

//Find electricity Bill

function calculate(){
    
let input = document.getElementById('unit-input');
let data = input.value;
let result = document.getElementById('result'); 

if(data<=100){
    let bill1 = data*5;
    result.innerHTML = `
    ${bill1}
    `
}
else if(data>100 && data<200){
    let bill2 = data*7;
    result.innerHTML = `
    ${bill2}
    `
}
else{
    let bill3 = data*10;
    result.innerHTML = `
    ${bill3}
    `
}
}
