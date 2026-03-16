function printTable()
{
var num = document.getElementById("num").value;
var result = "";

for(var i = 1; i <= 10; i++)
{
result += num + " x " + i + " = " + (num*i) + "<br>";
}

document.getElementById("result").innerHTML = result;
}