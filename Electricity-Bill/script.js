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
