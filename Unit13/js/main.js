// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
		display(0);  
    } // end if
} // end function

function display(x) {
	console.log(x);
	document.getElementById('roomName').innerHTML = hotelInfo[x].name;
	document.getElementById('desc').innerHTML = hotelInfo[x].description;
	document.getElementById('photo').src = hotelInfo[x].photo;
	document.getElementById('photoAttr').innerHTML = hotelInfo[x].photoAttr;
	document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
	document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;
	details = "";
	for(var i=0;i<hotelInfo[x].details.length;i++) {
		details += "<p>";
		details += hotelInfo[x].details[i];
		details += "</p>";
	}
	document.getElementById('details').innerHTML = details;
}