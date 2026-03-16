function insert(num)
{
document.getElementById("result").value += num;
}

function clearResult()
{
document.getElementById("result").value = "";
}

function calculate()
{
var exp = document.getElementById("result").value;
document.getElementById("result").value = eval(exp);
}