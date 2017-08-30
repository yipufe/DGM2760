// JavaScript Document
"use strict";
/*global $,document,screen,window*/

var c_name = "Inspector Clouseau";
var c_slogan = "Web inspection";
var c_title = "Clouseau's";

$(function() {
	document.getElementById("c_name").innerHTML = c_name;
	document.getElementById("c_slogan").innerHTML = c_slogan;
	document.getElementById("c_title").innerHTML = c_title;

	update();
});

function update() {
	var doc_last_modified = document.lastModified;
	var screen_height = window.screen.height;
	var screen_width = window.screen.width;
	var window_offset_top = window.screenY;
	var window_offset_left = window.screenX;
	var page_url = window.location.href;
	var page_title = document.getElementById("c_title").innerHTML;

	document.getElementById("last_modified").innerHTML = doc_last_modified;
	document.getElementById("window_height").innerHTML = screen_height;
	document.getElementById("window_width").innerHTML = screen_width;
	document.getElementById("window_offset_top").innerHTML = window_offset_top;
	document.getElementById("window_offset_left").innerHTML = window_offset_left;
	document.getElementById("page_url").innerHTML = page_url;
	document.getElementById("disp_page_title").innerHTML = page_title;

}