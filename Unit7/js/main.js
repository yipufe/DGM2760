// JavaScript Document
/*jslint browser:true */
"use strict";
/*global $,document,console*/

var c_name = "Pizza Emporium";
var c_slogan = "The best pizza around";

var pizza = {
	topping: "pepperoni",
	size: "small",
	crust: "thin",
	sause: "red",

	build: function() {
		var pizzaMsg = "Your "+this.size+" "+this.crust+" crust "+this.topping+" pizza on "+this.sause+" sause is being made.";
		console.log(pizzaMsg);
		document.getElementById("message").innerHTML = pizzaMsg;
	},
	list: function() {
		var toppingAmount = 0.5;
		var flourAmount = 1;
		var sauseAmount = 1;
		switch(this.size) {
			case 'small':
				toppingAmount = 0.5;
				flourAmount = 1;
				sauseAmount = 1;
				break;
			case 'medium':
				toppingAmount = 1;
				flourAmount = 1.5;
				sauseAmount = 1.5;
				break;
			case 'large':
				toppingAmount = 1.5;
				flourAmount = 2;
				sauseAmount = 2;				
				break;
			default:
		}
		if(this.crust == 'thick') {
			flourAmount *= 2;
		}
		var cup1 = "";
		var cup2 = "";
		if(flourAmount>1) {
			cup1 = "s";
		}
		if(sauseAmount>1) {
			cup2 = "s";
		}

		var shoppingMsg = "This pizza needs "+toppingAmount+"lb "+this.topping+", "+flourAmount+" cup"+cup1+" of flour, and "+sauseAmount+" cup"+cup2+" of "+this.sause+" sause.";
		console.log(shoppingMsg);
		document.getElementById("message").innerHTML = shoppingMsg;		
	}
};

function init() {
	document.getElementById("cName").innerHTML = c_name;
	document.getElementById("cSlogan").innerHTML = c_slogan;
}
