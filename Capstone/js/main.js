// JavaScript Document
/*jslint browser:true */
"use strict";

var rolodex = {};

function card(name, address, phoneNumber) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
}

//build Google Maps link with street address
function createGoogleMapsLink(addr) {
	return "http://maps.google.com/maps?q="+encodeURIComponent(addr);
}

//Sort contacts
function sortContacts() {
	rolodex.contacts.sort(function(a, b) {
		var aName = a.name.toLowerCase();
		var bName = b.name.toLowerCase();

		if(aName < bName) {
			return -1;
		} else if(aName > bName) {
			return 1;
		}
		return 0;

	});
}

//display contacts in rolodex div
function displayContacts() {
	//Sort A-Z
	sortContacts();

	document.getElementById('rolodex').innerHTML = "";
	var i;
	for(i=0; i<rolodex.contacts.length; i++) {
		var contactCard = document.createElement('div');

		//Create Contect Removal Button
		var deletionTag = document.createElement('i');
		deletionTag.setAttribute("onclick", "removeContact("+i+")");
		deletionTag.setAttribute("class", "delete fa fa-times-circle fa-2x");
		contactCard.appendChild(deletionTag);

		//Create contact name element
		var nameTag = document.createElement('p');
		nameTag.innerHTML = rolodex.contacts[i].name;
		nameTag.setAttribute("class", "name");
		contactCard.appendChild(nameTag);

		//Create Google Maps address link
		var addressTag = document.createElement('p');
		addressTag.setAttribute("class", "address");
		var addressIcon = document.createElement('i');
		addressIcon.setAttribute("class", "fa fa-map-marker fa-2x");
		addressTag.appendChild(addressIcon);
		var address = document.createElement('a');
		var googleMapsLink = createGoogleMapsLink(rolodex.contacts[i].address);
		address.setAttribute("href", googleMapsLink );
		address.innerHTML = rolodex.contacts[i].address;
		address.setAttribute("target", "_blank");
		addressTag.appendChild(address);
		contactCard.appendChild(addressTag);

		//Create phone link element
		var phoneNumTag = document.createElement('p');
		phoneNumTag.setAttribute("class", "phoneNumber");
		var phoneIcon = document.createElement('i');
		phoneIcon.setAttribute("class", "fa fa-phone fa-2x");
		phoneNumTag.appendChild(phoneIcon);
		var phoneNumber = document.createElement('a');
		phoneNumber.setAttribute("href","tel:"+rolodex.contacts[i].phoneNumber);
		phoneNumber.innerHTML = rolodex.contacts[i].phoneNumber;
		phoneNumTag.appendChild(phoneNumber);
		contactCard.appendChild(phoneNumTag);
		
		//Append contact to rolodex element
		document.getElementById('rolodex').appendChild( contactCard );
	}
}

//Save rolodex to localStorage
function saveRolodex() {
	localStorage.setItem("rolodex", JSON.stringify(rolodex) );
}

//Add a contact to the rolodex
function addContact() {
	//get field entries
	var name = document.forms.contactForm.contactName.value;
	var address = document.forms.contactForm.contactAddress.value;
	var number = document.forms.contactForm.contactNumber.value;

	var validInput = true;
	//Check name
	if(name.length == 0) {
		document.getElementById("contactName").className = "error";
		document.getElementById("nameErr").className = "error";
		validInput = false;
	} else {
		document.getElementById("contactName").className = "";
		document.getElementById("nameErr").className = "hidden";
	}

	//Check address
	if(address.length == 0) {
		document.getElementById("contactAddress").className = "error";
		document.getElementById("addrErr").className = "error";
		validInput = false;
	} else {
		document.getElementById("contactAddress").className = "";
		document.getElementById("addrErr").className = "hidden";
	}

	//Check phone number
	var tempNumber = number.replace(/-/g,"");
	if(tempNumber.length < 10 || tempNumber.length > 15) {
		document.getElementById("phoneNumber").className = "error";
		document.getElementById("numberErr").className = "error";
		validInput = false;
	} else {
		document.getElementById("phoneNumber").className = "";
		document.getElementById("numberErr").className = "hidden";
	}

	if(!validInput) {
		return false;
	}

	//Clear Fields
	document.forms.contactForm.contactName.value="";
	document.forms.contactForm.contactAddress.value="";
	document.forms.contactForm.contactNumber.value="";


	//create new card
	var newContact = new card(name, address, number);

	//update JSON object
	rolodex.contacts.push(newContact);

	//Sort A-Z
	sortContacts();

	//update display
	displayContacts();

	//update localStorage
	saveRolodex();
	return false;	//Temporary fix
}

//Remove contact n from rolodex array
function removeContact(n) {
	//delete contact from JSON
	var newRolodexContacts = [];
	var i;
	for(i=0;i<rolodex.contacts.length;i++) {
		if(i!=n) {
			newRolodexContacts.push(rolodex.contacts[i]);
		}
	}
	rolodex.contacts = newRolodexContacts;
	//update display
	displayContacts();	
	//update localStorage
	saveRolodex();
}

//Load rolodex from localStorage
function getRolodex() {
	var rawData = localStorage.getItem("rolodex");
	if(rawData !== null) {
		rolodex = JSON.parse(rawData);
	} else {
		rolodex = {contacts: []};
		saveRolodex();
	}	
}

//runs on page load
function init() {
	//Get JSON from localStorage if exists
	getRolodex();
	//update display
	displayContacts();
}
