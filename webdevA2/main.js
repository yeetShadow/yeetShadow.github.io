//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");


function hideall() { //function to hide all pages
	page1.style.display = "none";
	page2.style.display = "none";
	page3.style.display = "none";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function() {
	hideall(); //we don't know which page is shown, so hideall
	page1.style.display = "block";
});
page2btn.addEventListener("click", function() {
	hideall(); //we don't know which page is shown, so hideall
	page2.style.display = "block";
});
page3btn.addEventListener("click", function() {
	hideall(); //we don't know which page is shown, so hideall
	page3.style.display = "block";
	setTimeout(function() {
		//setTimeout(function to call,delay in milisec), can set function separately
		alert("Game end");

	}, 60000);
});
hideall(); //call hideall function to hide all pages



/*JS for hamMenu */
//get the "open menu" button (meant for hamIcon)
const hamBtn = document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click", toggleMenus);
//get the menuItem list
const menuItemsList = document.querySelector("nav ul");
/*toggle, just like light switch, off becomes on, on becomes off*/
/*if menu is shown, hide it, if hidden, show it*/
function toggleMenus() {
	//if menuItemsList dont have the class "menuShow", add the class, else remove class
	if (menuItemsList.classList.contains("menuShow")) {
		hamBtn.innerHTML = "Open Menu"; //change button text to chose menu
		menuItemsList.classList.remove("menuShow");
	} else { //if menu NOT showing
		hamBtn.innerHTML = "Close Menu"; //change button text open menu
		menuItemsList.classList.add("menuShow");
	}
}

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;

function CheckAns() {
	score = 0;
	q1 = document.querySelector("input[name='q1']:checked").value;
	console.log(q1); //check q1 value retrieved
	if (q1 == "Sterilizing medical equipments") score++;
	q2 = document.querySelector("input[name='q2']:checked").value;
	console.log(q2); //check q2 value retrieved
	if (q2 == "Microwave") score++;
	scorebox.innerHTML = "Score:" + score;
	var ansArray = [];
	ansArray = ["Sterilization", "Microwave"];
	for (let i = 0; i < ansArray.length[i]; i++) {
		CheckOneAns(i + 1, ansArray[i]);

	}
	scorebox.innerHTML = "Score:" + score;
}

function CheckOneAns(qNo, CorrAns) {
	var cssSel;
	cssSel = `input[name='q${qNo}']:checked`;
	var qTemp;
	qTemp = document.querySelector(cssSel).value;
	console.log(qTemp);
	if (qTemp == CorrAns, score++);

}


setTimeout(function() {
	//setTimeout(function to call,delay in milisec), can set function separately
	alert("Hello");
}, 1000); // run after 1 sec (1000ms)



const Bacteriaid = document.getElementById("Bacteriaid");

function GetRandom(min, max) {
	//this will select a number between min and max
	return Math.round(Math.random() * (max - min)) + min;
}

function MoveBacteria() {
	Bacteriaid.style.left = GetRandom(0, 400) + "px";
	Bacteriaid.style.top = GetRandom(0, 300) + "px";
}
setInterval(MoveBacteria, 1000);

const scoreBox = document.getElementById("scoreBox");
const popAudio = new Audio("popsound.mp3");
var score = 0; //to track how many clicks

function killbacteria() {
	//increases score after clicking

	score++;

	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
	popAudio.play();
}
//link durian to mouseclick to durianCatch function
Bacteriaid.addEventListener("click", killbacteria);


document.addEventListener("keydown", function(evt) {
	console.log(evt);
	if (evt.code == "KeyT") {
		Bacteriaid.classList.add("shrink");
	}
	if (evt.code == "KeyU") {
		Bacteriaid.classList.remove("shrink");
	}
});

Bacteriaid.classList.add("rotAnim");