// JavaScript Document
/*jslint browser:true */
"use strict";
/*global $,document,console*/

var c_name = "Grants Tomb";
var c_slogan = "Quizing";

var question = {
	question: "Who is burried in Grants Tomb?",
	answere1: "Sue",
	answere2: "Grant",
	answere3: "Phill",
	answere4: "Josh",
	correct: 2,
	check: function(n) {
		if(n==this.correct) {
			document.getElementById("message").innerHTML = "Correct";
		} else {
			document.getElementById("message").innerHTML = "Incorrect, try again";
		}
	},
	populate: function() {
		document.getElementById("question").innerHTML = this.question;
		document.getElementById("answere1").innerHTML = this.answere1;
		document.getElementById("answere2").innerHTML = this.answere2;
		document.getElementById("answere3").innerHTML = this.answere3;
		document.getElementById("answere4").innerHTML = this.answere4;
		
	}
};

function init() {
	document.getElementById("cName").innerHTML = c_name;
	document.getElementById("cSlogan").innerHTML = c_slogan;

	question.populate();
}
