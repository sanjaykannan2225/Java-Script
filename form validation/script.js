function validateForm()
{
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

if(name == "")
{
document.getElementById("msg").innerHTML = "Name cannot be empty";
return false;
}

if(email == "")
{
document.getElementById("msg").innerHTML = "Email cannot be empty";
return false;
}

document.getElementById("msg").innerHTML = "Form submitted successfully";
return true;
}