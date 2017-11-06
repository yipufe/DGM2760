/*jslint browser:true */
"use strict";


function getDailyUsekWh() {	
	var yearlyTotal = 0;
	var months = document.getElementById("mpc").getElementsByTagName("input");
	var i;
	for(i=0;i<months.length;i++) {
		yearlyTotal += parseInt(months[i].value);
	}
	return yearlyTotal / 365;
}

function getHourOfSunlight(zone) {
	var hours;
	switch(zone) {
		case 1:
			hours=6;
			break;
		case 2:
			hours=5.5;
			break;
		case 3:
			hours=5;
			break;
		case 4:
			hours=4.5;
			break;
		case 5:
			hours=4.2;
			break;
		case 6:
			hours=3.5;
			break;
		default:
			hours=0;	
	}
	return hours;
}

function getSelectedZone() {
	return document.forms.solarForm.zone.selectedIndex+1;
}

function getPanelOutput() {
	var panelSelect =  document.forms.solarForm.panel;
	return panelSelect.options[panelSelect.selectedIndex].value;
}

function getPanelName() {
	var panelSelect =  document.forms.solarForm.panel;
	return panelSelect.options[panelSelect.selectedIndex].text;	
}

function calculateSolar() {
	var dailyUsagekWh = getDailyUsekWh();
	var zoneSelected = getSelectedZone();
	var hourOfSunlight = getHourOfSunlight(zoneSelected);
	var panelOutputWh = getPanelOutput();
	var panelName = getPanelName();

	var hourlyNeedsWh = (dailyUsagekWh/hourOfSunlight) * 1000;
	var hourlyNeedsWhAdjusted = hourlyNeedsWh * 1.25;

	var panelsNeeded = Math.ceil( hourlyNeedsWhAdjusted/panelOutputWh ); 

	var solarRec = "<p>Based on your average daily use of "+Math.round(dailyUsagekWh)+"Kwh, you will need to purchase "+panelsNeeded+" "+panelName+" solar panels to offset 100% of your electricity bill.</p>";
	solarRec += "<h2>Additional Details</h2>";
	solarRec += "<p>Your average daily electricity consumption: "+Math.round(dailyUsagekWh)+" Kwh per day.</p>";
	solarRec += "<p>Average sunshine hours per day: "+hourOfSunlight+" hours</p>";
	solarRec += "<p>Realistic watts needed per hour: "+Math.round(hourlyNeedsWhAdjusted)+" watts/hour</p>";
	solarRec += "<p>The "+panelName+" panel you selected generates about "+panelOutputWh+" watts per hour.</p>";

	document.getElementById("feedback").innerHTML = solarRec;
}


