// JavaScript Document
"use strict";
/*global $,document,console*/

var c_name = "Nonsense Story";
var c_slogan = "Finding adventure";

//convert text input to array
function convertToArray(inputText) {
	return inputText.split(/\n|\s+/);
}

//get noun list
function getNouns() {
	var rawNounText = document.getElementById('nouns').value;
	rawNounText = rawNounText.toLowerCase();
	var nounArray = convertToArray(rawNounText);
	return nounArray;
}
//get adjective list
function getAdjectives() {
	var rawAdjText = document.getElementById('adjective').value;
	rawAdjText = rawAdjText.toLowerCase();
	var adjArray = convertToArray(rawAdjText);
	return adjArray;	
}
//get verb list
function getVerbs() {
	var rawVerbText = document.getElementById('verb').value;
	rawVerbText = rawVerbText.toLowerCase();
	var verbArray = convertToArray(rawVerbText);
	return verbArray;		
}

//wrap in span
function wrap(str, ident) {
	return "<span class='"+ident+"'>"+str+"</span>";
}

//return next noun
var nouns = [];
var nounPtr = 0;
function noun() { 
	return wrap( nouns[nounPtr++], "noun" ); 
}
//return next adjective
var adjectives = [];
var adjPtr = 0;
function adj() { 
	return wrap( adjectives[adjPtr++], "adjective" ); 
}
//return next verb
var verbs = [];
var verbPtr = 0;
function verb() { 
	return wrap( verbs[verbPtr++], "verb" ); 
}

//populate story nouns, adjectives, and verbs
function generateStory() {
	nouns = getNouns();
	adjectives = getAdjectives();
	verbs = getVerbs();
	nounPtr=0;
	adjPtr=0;
	verbPtr=0;
	
	var story = "";
	
	if( nouns.length>=6 &&
		adjectives.length>=5 &&
		verbs.length>=3) {
		story = 'I followed the girl, who was '+verb()+
			'ing with strong emotion, up the staircase '+
			'and down a '+adj()+' corridor. At the end '+
			'was an iron-clamped and '+adj()+' '+noun()+'. '+
			'It struck me as I looked at it that '+
			'if Ferguson tried to force his way to '+
			'his wife he would find it no easy '+
			'matter. The girl drew a '+noun()+' from her '+
			'pocket, and the '+adj()+' oaken planks '+
			'creaked upon their old hinges. I '+
			'passed in and she swiftly followed, '+
			verb()+'ing the '+noun()+' behind her. '+
			'On the bed a woman was lying who was '+
			'clearly in a high fever. She was only '+
			'half conscious, but as I entered she '+
			'raised a pair of frightened but '+
			adj()+' eyes and glared at me in '+
			'apprehension. Seeing a stranger, she '+
			'appeared to be relieved and sank back '+
			'with a sigh upon the '+noun()+'. I stepped '+
			'up to her with a few '+verb()+'ing words, '+
			'and she lay still while I took her '+noun()+' '+
			'and '+noun()+'. Both were high, and yet '+
			'my impression was that the condition was '+
			'rather that of mental and '+adj()+' '+
			'excitement than of any actual seizure.';

		document.getElementById("story").innerHTML = story;
	} else {
		var errMsg = '<p id="err">Cannot build story with so little. Please provide 6 nouns, 5 adjectives, and 3 verbs.</p>';
		document.getElementById("story").innerHTML = errMsg;
	}


}
var generateBtn = document.getElementById('generateStory');
generateBtn.onclick = generateStory;

function init() {
	document.getElementById("cName").innerHTML = c_name;
	document.getElementById("cSlogan").innerHTML = c_slogan;
}
