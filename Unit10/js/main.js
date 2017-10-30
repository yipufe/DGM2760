/*jslint browser:true */
"use strict";

function duplicateNav() {
	var links = document.querySelectorAll('ul#primaryNavigation li a');

	var uList = document.createElement("ul");
	var i;
	for(i=0; i<links.length;i++) {
		var tempLink = links[i].getAttribute("href");
		var tempText = links[i].text;

		var link = document.createElement("a");
		link.setAttribute('href', tempLink);
		link.innerHTML = tempText;

		var listItem = document.createElement("li");
		listItem.appendChild(link);

		uList.appendChild(listItem);
	}

	document.getElementById('smallNavArea').appendChild(uList);
}

duplicateNav();