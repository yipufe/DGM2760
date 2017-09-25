// JavaScript Document
"use strict";
/*global $,document,console*/

var c_name = "Arborist";
var c_slogan = "Tree care";
var tree_list = ["Pine", "Walnut","oak"];

//Display message
function displayMessage(msg) {
	document.getElementById("dispMsg").innerHTML = msg;
}

//Print list
function displayList(list) {
	var content = "<ul>";
	for(var i=0;i<list.length;i++) {
		content += "<li>"+list[i] +"</li>";
	}
	content += "</ul>";
	document.getElementById("dispList").innerHTML = content;
	document.getElementById("listCount").innerHTML = "Count: "+list.length;
}

//Add tree to front
var addElementFront = function() {
	var tree = "Redwood";
	var newList = [tree];
	for(var i=1;i<tree_list.length+1;i++) {
		newList[i] = tree_list[i-1];
	}
	tree_list = newList;
	displayList(tree_list);
};
var btnAddElementFront = document.getElementById("btnAddStart");
btnAddElementFront.onclick = addElementFront;

//Add tree to back
var addElementBack = function() {
	var tree="Cottonwood";
	tree_list.push(tree);
	displayList(tree_list);
};
var btnAddElementBack = document.getElementById("btnAddEnd");
btnAddElementBack.onclick = addElementBack;

//Remove first tree from list
var removeFirstElement = function() {
	if(tree_list.length == 0) {
		displayMessage("Nothing to remove");
	} else {
		var newTreeList = [];
		for(var i=1;i<tree_list.length;i++) {
			newTreeList.push(tree_list[i]);
		}
		tree_list = newTreeList;
		displayList(tree_list);
	}
};
var btnRemoveFirstElement = document.getElementById("btnRemoveFirst");
btnRemoveFirstElement.onclick = removeFirstElement;

//Remove second element in list
var removeSecondElement = function() {
	if(tree_list.length < 2) {
		displayMessage("Nothing to remove");
	} else {
		var newTreeList = [tree_list[0]];
		for(var i=2;i<tree_list.length;i++) {
			newTreeList.push(tree_list[i]);
		}
		tree_list = newTreeList;
		displayList(tree_list);
	}
};
var btnRemoveSecondElement = document.getElementById("btnRemoveSecond");
btnRemoveSecondElement.onclick = removeSecondElement;

//Remove last tree from list
var removeLastElement = function() {
	if(tree_list.length == 0) {
		displayMessage("Nothing to remove");
	} else {
		var newTreeList = [];
		for(var i=0;i<tree_list.length-1;i++) {
			newTreeList.push(tree_list[i]);
		}
		tree_list = newTreeList;
		displayList(tree_list);
	}
};
var btnRemoveLastElement = document.getElementById("btnRemoveLast");
btnRemoveLastElement.onclick = removeLastElement;

//Swap tree elements
function swapElements(a, b) {
	var tempTree = tree_list[a];
	tree_list[a] = tree_list[b];
	tree_list[b] = tempTree;
}
//Bubble sort
function bubbleSort() {
	var swapped = false;
	for(var i=1;i<tree_list.length;i++) {
		if(tree_list[i-1]>tree_list[i]) {
			swapElements(i-1,i);
			swapped=true;
		}
	}
	return swapped;
}
//Sort tree list
var sortElements = function() {
	if(tree_list.length<2) {
		displayMessage("Nothing to sort");
	} else {	
		while( bubbleSort() ) {}
		displayList(tree_list);
	}
};
var btnSort = document.getElementById("btnSort");
btnSort.onclick = sortElements;

//List to lower case
var elementsToLower = function() {
	if(tree_list.length==0) {
		displayMessage("Nothing to work on");
	}
	for(var i=0;i<tree_list.length;i++) {
		tree_list[i] = tree_list[i].toLowerCase();
	}
	displayList(tree_list);
};
var btnLowerCase = document.getElementById("btnLowerCase");
btnLowerCase.onclick = elementsToLower;

//Display element three
var displayElementThree = function() {
	if(tree_list.length < 3) {
		displayMessage("Nothing to display");
	} else {
		displayMessage(tree_list[2]);
	}
};
var btnDisplayThird = document.getElementById("btnDispThird");
btnDisplayThird.onclick = displayElementThree;

//Display element four
var displayElementFour = function() {
	if(tree_list.length < 4) {
		displayMessage("Nothing to display");
	} else {
		displayMessage(tree_list[3]);
	}
};
var btnDisplayFourth = document.getElementById("btnDispFourth");
btnDisplayFourth.onclick = displayElementFour;

function init() {
	document.getElementById("c_name").innerHTML = c_name;
	document.getElementById("c_slogan").innerHTML = c_slogan;

	displayList(tree_list);
}
