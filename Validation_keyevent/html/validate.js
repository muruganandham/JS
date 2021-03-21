var passwordField = document.getElementById("passinput");
passwordField.addEventListener("keyup", validate)

function validate() {
var firstString=document.querySelector("#nameinput").value
var secondString=document.querySelector("#passinput").value
if(firstString.includes(secondString)) {
    document.querySelector("#debug").innerHTML = "YES"
} else {
    document.querySelector("#debug").innerHTML = "NO"
}
}