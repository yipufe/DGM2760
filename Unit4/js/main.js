// JavaScript Document
"use strict";
/*global $,document,console*/

var c_name = "Fortune Teller";
var c_slogan = "I can see the future";

//Generates number between lowerLim and upperLim provided the range is no greater than 100
function generateRandomNumber(lowerLim, upperLim) {
	var randomRaw = ((Math.random()*100)%upperLim)+lowerLim;
	return Math.floor(randomRaw);
}

//Returns string containing the month name
function getMonthName() {
	var month = generateRandomNumber(1,12);
	switch(month) {
		case 1:
			return "January";
		case 2:
			return "Febuary";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			return "";
	}
}

//Generates number between 1 and 30
function getDay() {
	return generateRandomNumber(1,30);
}

function getFortune() {
	var fortuneNumber = generateRandomNumber(1,5);
	switch(fortuneNumber) {
		case 1:
			return "popcorn will fall from the sky";
		case 2:
			return "gas will be free";
		case 3:
			return "you will meet a muppet";
		case 4:
			return "you will find your missing socks";
		case 5:
			return "you will inherit the neighbors cat";
		default:
			return "";
	}
}

function buildFortune() {
	var fortune = "On "+getMonthName();
	fortune += " "+getDay();
	fortune += " "+getFortune();
	return fortune;
}

function generateAndDisplayFortune() {
	var fortune = buildFortune();
	document.getElementById("fortune").innerHTML = fortune;
}

function init() {
	document.getElementById("c_name").innerHTML = c_name;
	document.getElementById("c_slogan").innerHTML = c_slogan;
	generateAndDisplayFortune();
}
