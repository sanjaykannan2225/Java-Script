function showVariables()
{
var a = 10;     // var variable
let b = 20;     // let variable
const c = 30;   // constant variable

document.getElementById("demo").innerHTML =
"Var value: " + a + "<br>" +
"Let value: " + b + "<br>" +
"Const value: " + c;
}