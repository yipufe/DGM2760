// JavaScript Document
"use strict";
/*global $,document,console*/

var c_name = "High/Low<br/>Guessing Game";
var c_slogan = "Make your best guess!";

var number = Math.floor(((Math.random()*100)%15)+1);
var guesses = 0;

function show_msg(msg) {
	document.getElementById("game_message").innerHTML = msg;
}
function show_guesses(guess_val) {
	document.getElementById("guess_val").innerHTML = "Guesses: "+guess_val;
}

function award(guess_count) {
	var ribbon_img = document.createElement("IMG");

	switch(guess_count) {
		case 1:
		case 2:
		case 3:
			ribbon_img.setAttribute('src', 'img/blue_ribbon.png');
			break;
		case 4:
		case 5:
		case 6:
			ribbon_img.setAttribute('src', 'img/red_ribbon.png');
			break;
		default:
			ribbon_img.setAttribute('src', 'img/yellow_ribbon.png');
	}
	document.getElementById("award_box").appendChild(ribbon_img);
}

var awarded = false;
function make_guess() {
	if(awarded) { return; }
	//Get guess
	var guess_val = document.getElementById("guess_box").value;
	//Check guess range
	if(guess_val > 0 && guess_val < 16) {
		//If guess in range, inc guesses
		guesses++;
		//If guess correct, award ribbon
		if(guess_val == number) {
			show_msg("You are Correct");
			show_guesses(guesses);
			awarded = true;
			award(guesses);	
		} else if(guess_val < number) {
			show_msg("Your Guess was Too Low");
			//show_guesses(guesses);
		} else {
			show_msg("Your Guess was Too High");
			//show_guesses(guesses);
		}
	} else {
		//Pick a number between 1 and 15
		show_msg("Please pick a number between 1 and 15");
	}

}

function init() {
	document.getElementById("c_name").innerHTML = c_name;
	document.getElementById("c_slogan").innerHTML = c_slogan;	
}