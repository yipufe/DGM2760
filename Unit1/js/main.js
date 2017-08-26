
var yourName = prompt("What is your name?", "John Doe");
if(yourName=="null")
	yourName = "";
else
	yourName = " "+yourName;

var companyName = "Joe's Bed and Breakfast";
var companySlogan = "Your comfort is our quest";
var timeAtLoad = new Date();
var currentDate =  (timeAtLoad.getMonth()+1)+"/"+
	timeAtLoad.getDate()+"/"+
	timeAtLoad.getFullYear();

$(document).ready(function() {
	document.getElementById("persons_name").innerHTML = yourName;
	document.getElementById("c_name").innerHTML = companyName;
	document.getElementById("c_slogan").innerHTML = companySlogan;	
	document.getElementById("date_now").innerHTML = currentDate;	

});