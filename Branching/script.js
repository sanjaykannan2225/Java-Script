function checkResult()
{
var marks = document.getElementById("marks").value;

if(marks >= 50)
{
document.getElementById("result").innerHTML = "You Passed";
}
else
{
document.getElementById("result").innerHTML = "You Failed";
}
}