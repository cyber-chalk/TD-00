/** * @global *if accsesing these variables before its related function is initiated make sure to use @async/@await */
let x = 0;
let hour;
let toggleOff;
let currentHour;
let timeStr;
let checkObj = {};
let n = 8;
let currentDay;
let i = 1;

const newSpan = document.createElement("time"); //creates the element which the time is in
newSpan.setAttribute = ("id", "time");
const timeContainer = document.getElementById("display-time");
timeContainer.append(newSpan);

class timer {
	constructor(input, id) {
		this.input = input;
		this.id = id;
		checkObj[this.id] = this;
		this.checkInput();
	}
	checkInput() {
		if (this.input == timeStr) {
			this.input = "";
			return alert("times up");
		}
	}
}

function create(theParent) {
	let time = theParent.querySelector('input[type="time"]');
	let name = theParent.querySelector('input[type="text"]');
	let container = theParent.querySelector(".timer-container"); //container appending it into

	let timeClone = time.cloneNode();
	let nameClone = document.createElement("p");
	let div = document.createElement("div");
	let colon = document.createElement("p");

	colon.innerText = ":";
	nameClone.innerText = name.value;
	timeClone.id = n++;
	div.addEventListener("click", function () {
		div.remove();
	});

	if (!name.value) {
		colon.innerText = "";
	}

	container.append(div);
	div.append(nameClone, colon, timeClone);
}

const military = (switch12) => {
	if (hour >= 13) {
		x += 12;
	} else if (switch12) {
		x -= 12;
	}
	time(); // this is to make sure it happens as soon as possible and not have a slight delay
};

const toggle = () => {
	i++;
	if (toggleOff == true) return; //if hour is less than 12 or is equal to 12 or 24

	if ((i % 2 === 0) === false) {
		if (i > 2) {
			const revert = true;
			military(revert);
		}
		return;
	}
	military();
};

function time() {
	let d = new Date();
	let sec = d.getSeconds();
	let min = d.getMinutes();
	currentHour = d.getHours(); // uneffected by 12 hour mode
	hour = d.getHours() - x;
	currentDay = d.getDay();
	timeStr = ("0" + currentHour).slice(-2) + ":" + ("0" + min).slice(-2);
	check(currentHour, min);
	newSpan.innerText =
		/* "0" + h + ":" + ("0" + m).substr(-2) + ":" + ("0" + s) */
		hour + ":" + min + ":" + sec;
}
time();

function findDay() {
	var days = document.getElementsByClassName("time-input");
	let dayArr = []; // array from the variable days. This is because it is a htmlcollection.

	for (let l = 0; l < days.length; l++) dayArr.push(days[l]);

	for (let j = 0; j < dayArr.length; j++) {
		if (dayArr[j].id != currentDay) {
			//The current day Variable is being subtracted because array index's start from zero
			//The id's of the days in the html start from 0 (monday) and go to 6 (sunday)
			//this is because it would cause an error and not show certain days.
			let deleted = dayArr[j].dataset.theDay;
			let element = document.getElementById(deleted);
			element?.remove();
		}
	}
}
findDay();

function check(_hour, _min) {
	if (_hour <= 11) toggleOff = true; //checks if you can go into 12 hour mode
	if (_hour >= 13) toggleOff = false;
	if (_hour == 0 && _min == 0) findDay();
}

var dt;
const interval = 1000; // ms
let expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
	dt = Date.now() - expected; // the drift (positive for overshooting)
	// do what needs to be done
	time(); //might need to move check() back above time()
	for (let property in checkObj) checkObj[property].checkInput();

	expected += interval;
	setTimeout(step, Math.max(0, interval - dt, interval)); // take into account drift
}
