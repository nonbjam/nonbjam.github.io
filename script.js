'use strict';
let a1b2c3d4;
var a1b2c3d22 = 0;
let a1b2c3d5;

var siteWidth = 1280;
var scale = screen.width / siteWidth;

//document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
document.body.style.zoom=1.5;this.blur();

const a1b2c3d21 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0];
const a1b2c3d20 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","$"];
let a1b2c3d6;
let a1b2c3d7;
let a1b2c3d8;
let a1b2c3d9;
let a1b2c3d13 = ""; //
var a1b2c3d25;
var a1b2c3d26;
let a1b2c3d12;
let a1b2c3d11;
let a1b2c3d15 = ""; //
var a1b2c3d23;
let a1b2c3d14 = ""; //
var a1b2c3d24;
let a1b2c3d10;

document.getElementById("aa").disabled = true;
document.getElementById("bb").focus();

function a1b2c3d30() {	
	if (document.getElementById("aa").value.length == 0) {
		document.getElementById("cc").value = "";
		document.getElementById("bb").focus();
	}
}

function a1b2c3d32() {
	if (document.getElementById("bb").value.length == 2) {
		document.getElementById("aa").disabled = false;
		document.getElementById("aa").focus();
	}
	else {
		document.getElementById("aa").disabled = true;
	}
}

function a1b2c3d31(ele){
	a1b2c3d4 = document.getElementById("aa").value.replace(/ /g,"");
	
	a1b2c3d5 = document.getElementById("bb").value.replace(/ /g,"");
	
	//const a1b2c3d21 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0];
	//const a1b2c3d20 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","$"];
	
	//let a1b2c3d6;
	a1b2c3d6 = a1b2c3d5.split("");
	
	//let a1b2c3d7;
	//let a1b2c3d8;
	
	if (document.getElementById("bb").value != "") {
		if ( a1b2c3d20.indexOf(a1b2c3d6[0]) == -1) {
			a1b2c3d7 = Math.floor(Math.random() * 27);
			a1b2c3d8 = Math.floor(Math.random() * 27);		
		} else {
			a1b2c3d7 = a1b2c3d20.indexOf(a1b2c3d6[0]);
			a1b2c3d8 = a1b2c3d20.indexOf(a1b2c3d6[1]);
		}
	}
	
	a1b2c3d22 = a1b2c3d21[a1b2c3d7] + a1b2c3d21[a1b2c3d8];
				
	//let a1b2c3d9;
	a1b2c3d9 = a1b2c3d4.split("");
	
	console.log(a1b2c3d9);
	//let a1b2c3d13 = ""; //
	a1b2c3d13 = "";
	a1b2c3d25 = 0;
	a1b2c3d26 = 0;
	while (a1b2c3d25 < a1b2c3d4.length) {
		while (a1b2c3d26 < a1b2c3d20.length) {
			if ( a1b2c3d9[a1b2c3d25] == a1b2c3d20[a1b2c3d26] ) {
				a1b2c3d13 += a1b2c3d21[a1b2c3d26].toString();
				console.log("i " + a1b2c3d25 + " j " + a1b2c3d26 + " encode_index " + a1b2c3d21[a1b2c3d26] + " site to num " + a1b2c3d13);
				a1b2c3d26 = 0;
				break; 
			}
			a1b2c3d26++;
		}
		a1b2c3d25++;
	}
	
	//let a1b2c3d12;
	a1b2c3d12 = a1b2c3d13.replace("undefined","");
	
	//let a1b2c3d11 = a1b2c3d12.split("");
	a1b2c3d11 = a1b2c3d12.split("");
	
	//let a1b2c3d15 = ""; //
	a1b2c3d15 = "";
	a1b2c3d23 = 0;
	//let a1b2c3d14 = ""; //
	a1b2c3d14 = "";
	a1b2c3d24 = 0;
	while (a1b2c3d23 < a1b2c3d12.length) {
		if (a1b2c3d23 % 2 == 1) {
			a1b2c3d14 = (((parseInt(a1b2c3d11[a1b2c3d23]) + a1b2c3d4.length) % 10) + a1b2c3d22) % 26;
			a1b2c3d14 = a1b2c3d20[a1b2c3d21.indexOf(a1b2c3d14)].toString();
			if (a1b2c3d24 % 2 == 1) {
				a1b2c3d15 += a1b2c3d14.toString().toUpperCase();
			}
			else {
				a1b2c3d15 += a1b2c3d14.toString();
			}
			a1b2c3d24++;	
		} else {
			a1b2c3d15 += ((parseInt(a1b2c3d11[a1b2c3d23]) + a1b2c3d4.length) % 10).toString();
		}
		a1b2c3d23++;
	}

	//let a1b2c3d10;
	a1b2c3d10 = a1b2c3d15.replace("undefined","");

	if (a1b2c3d10.length > 16) {
		a1b2c3d10 = a1b2c3d10.slice(0,16);
	}
	
	document.getElementById("cc").value = a1b2c3d10;
	
	if (a1b2c3d4.match(/(.)\1{3,}/g, '$1')) {		
		document.getElementById("aa").value = "";
		document.getElementById("cc").value = "";
		alert("WARNING !! Please don't repeat the same character.");
		
	}
}