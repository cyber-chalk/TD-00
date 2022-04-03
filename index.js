/** * @global *if accsesing these variables before its related function is initiated make sure to use @async/@await */
let x = 0;
let hour;
let toggleOff;
let currentHour;
let timeStr;
let checkObj = {};
let n = 2;

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

function create(event, parentElement, that) {
	let origin = parentElement.querySelector("input");
	let nodeClone = origin.cloneNode();
	nodeClone.id = n++;
	nodeClone.value = "";
	let newOrigin = document.getElementById("span");
	newOrigin.appendChild(nodeClone);
}

const military = (switch12) => {
	if (hour >= 13) {
		x += 12;
	} else if (switch12) {
		x -= 12;
	}
	time(); // this is to make sure it happens as soon as possible and not have a slight delay
};

let i = 1;
const toggle = () => {
	i++;
	if (toggleOff == true) return; //if hour is less than 12 or is equal to 12 or 24

	if ((i % 2 === 0) === false) {
		if (i > 2) {
			const revert = true;
			military(revert);
		}
		console.log("false/off", i);
		return;
	}
	console.log("true/on", i);
	military();
};

function time() {
	let d = new Date();
	let sec = d.getSeconds();
	let min = d.getMinutes();
	currentHour = d.getHours(); // uneffected by 12 mode
	hour = d.getHours() - x;
	timeStr = ("0" + currentHour).slice(-2) + ":" + ("0" + min).slice(-2);
	newSpan.innerText =
		/* "0" + h + ":" + ("0" + m).substr(-2) + ":" + ("0" + s) */
		hour + ":" + min + ":" + sec;
}
time();

function check(_hour) {
	if (_hour <= 11) {
		toggleOff = true; //checks if you can go into 12 hour mode
		return;
	}
	if (_hour >= 13) {
		toggleOff = false;
	}
}

var dt;
const interval = 1000; // ms
let expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
	let alt = 1000;
	dt = Date.now() - expected; // the drift (positive for overshooting)

	if (dt > interval) {
		alt -= dt; //error handler
	}
	// do what needs to be done
	check(currentHour);
	time();
	for (let property in checkObj) checkObj[property].checkInput();

	expected += interval;
	setTimeout(step, Math.max(0, interval - dt, alt)); // take into account drift
}
