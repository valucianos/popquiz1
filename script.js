var popEle = document.body.querySelctor(".pop");
var number = 5;
var input = Number(prompt("Enter a number."));
while(isNaN(input)) {
  popEle.innerHTML =
    "Value entered is not valid. Please enter a number.";
  var input = Number(prompt("Enter a number."));
}
var added=input+number;
document.body.querySelector(".pop").innerHTML=added;
if (added>10){
  document.body.querySelector(".pop").innerHTML = "Program Ended";
}