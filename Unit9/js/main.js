// JavaScript Document
/*jslint browser:true */
"use strict";

function getPageName(address) {
	address = address || location.href;

	var addressParts = address.split('?');
	address = addressParts[0];
	var getRequest = addressParts[1];

	addressParts = address.split('#');
	address = addressParts[0];
	var hashTag = addressParts[1];

	addressParts = address.split('/');
	var pageName = addressParts[addressParts.length-1];

	return pageName;
}

var currentPageName = getPageName();
if(currentPageName === "")
	currentPageName = "index.php";

var menuLinks = document.querySelectorAll("ul#mainmenu li a");
var i;
for(i=0;i<menuLinks.length;i++) {
	var linkAddress = menuLinks[i].getAttribute("href");
	var linkPageName = getPageName(linkAddress);
	if(linkPageName === currentPageName) {
		menuLinks[i].parentNode.className = "active";
		if(menuLinks[i].parentNode.parentNode.parentNode.tagName === "LI") {
			menuLinks[i].parentNode.parentNode.parentNode.className = "parent";
		}
	} else {
		menuLinks[i].parentNode.className = "";
	}
}