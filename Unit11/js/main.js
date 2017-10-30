/*jslint browser:true */
"use strict";

function validateForm() {
	var status = true;

	//Reset classes
	var sections = ["fullName","phoneNumber","payMethod","ccNumber","vehicle"];
	var i;
	for(i=0;i<sections.length;i++) {
		document.getElementById(sections[i]).className = "normal";
	}

	//Validate Name Entry
	var fullName = document.myForm.fullName.value;
	if(fullName === null || fullName === "") {
		status = false;
		document.getElementById("fullName").className = "error";
	}

	//Validate Phone Number
	var cellNumber = document.myForm.phoneNumber.value;
	cellNumber = cellNumber.replace(/-/g,"");	//Remove all dashes

	if(cellNumber.length < 10 || cellNumber.length > 15) {
		status = false;
		document.getElementById("phoneNumber").className = "error";
	}

	//Validate Pay Method Select
	var payMethod = document.getElementsByName("payMethod");
	var methodChecked = false;
	for(i=0;i<payMethod.length;i++) {
		if( payMethod[i].checked ) {
			methodChecked = true;
			break;
		}
	}
	if(!methodChecked) {
		status = false;
		document.getElementById("payMethod").className = "error";
	}

	//Validate CC Number
	var ccNumber = document.myForm.ccNumber.value;
	ccNumber = ccNumber.replace(/ /g,"");	//Remove all dashes

	if(ccNumber.length != 15) {
		status = false;
		document.getElementById("ccNumber").className = "error";
	}

	//Validate Vehicle Select
	var vehicle = document.forms.myForm.vehicle.selectedIndex;
	if(vehicle == 0) {
		status = false;
		document.getElementById("vehicle").className = "error";
	}

	//Show error message box acording to status
	if(status == false) {
		document.getElementById("formProblems").className = "showErrorMsg";
	}

	return status;
}