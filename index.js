/** * @global *if accsesing these variables before the time function is initiated make sure to use @async/@await */
let x = 0;
let sec;
let min;
let hour;
let d;
let toggleOff;
let currentHour;
let alt;

const newSpan = document.createElement("time");
newSpan.setAttribute = ("id", "time");

const timeContainer = document.getElementById("display-time");
timeContainer.append(newSpan);

const military = (switch12) => {
	if (hour >= 13) {
		//13
		x += 12;
		time(); // this is to make sure it happens as soon as possible and not have a slight delay
	} else if (switch12) {
		x -= 12;
		time(); //see comment above
	}
};

let i = 1;
const toggle = async () => {
	i++;
	await toggleOff;

	if (toggleOff == true) return; //if hour is less than 12 or is equal to 12 or 24

	if ((i % 2 === 0) === false) {
		if (i > 2) {
			const revert = true;
			//call military with a argument
			military(revert);
		}
		console.log("false/off", i);
		return;
	}
	console.log("true/on", i);
	military();
};

let time = () => {
	d = new Date();
	sec = d.getSeconds();
	min = d.getMinutes();
	currentHour == d.getHours(); //may need to use this later
	hour = d.getHours() - x;

	newSpan.innerText =
		/* "0" + h + ":" + ("0" + m).substr(-2) + ":" + ("0" + s) */
		hour + ":" + min + ":" + sec;
};
time();

if (hour <= 11) {
	//checks if you can go into 12 hour mode
	toggleOff = true;
}

const interval = 1000; // ms
let expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
	var dt = Date.now() - expected; // the drift (positive for overshooting)
	//error handler
	if (dt > interval) {
		alt = 500; //may also need to change it back to 0
		console.log("overshoot");
	}
	// do what needs to be done
	if (hour >= 13) {
		toggleOff = false;
	}
	time();
	expected += interval;
	setTimeout(step, Math.max(0, interval - dt, alt)); // take into account drift
}
