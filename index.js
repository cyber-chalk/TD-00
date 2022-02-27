/** * @global *if accsesing these variables before the time function is initiated make sure to use @async/@await */
let x = 0;
let sec;
let min;
let hour;
let d;
let trueORfalse;

//makes a time tag so computers can read it and also so I can change the time
const newSpan = document.createElement("time");
newSpan.setAttribute = ("id", "time");

const timeContainer = document.getElementById("display-time");
timeContainer.append(newSpan);

const military = (switch12) => {
	if (hour > 12) {
		x = 12;
		time(); // this is to make sure it happens as soon as possible and not have a slight delay
	}
	if (switch12) {
		x -= 12;
		time(); //see comment above
	}
};

let i = 1;
const toggle = () => {
	i++;
	if ((i % 2 === 0) === false) {
		if (i > 2) {
			const revert = true;
			//call military with a argument
			military(revert);
		}

		console.log("false/off", i);
		trueORfalse = false;
		return;
	}
	console.log("true/on", i);
	trueORfalse = true;
	military();
};

/** time @generator*/

let time = () => {
	d = new Date();
	sec = d.getSeconds();
	min = d.getMinutes();
	hour = d.getHours() - x;

	newSpan.innerText =
		/* "0" + h + ":" + ("0" + m).substr(-2) + ":" + ("0" + s) */
		hour + ":" + min + ":" + sec;
};

time();

const interval = 1000; // ms
let expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
	var dt = Date.now() - expected; // the drift (positive for overshooting)
	//error handler
	if (dt > interval) {
		dt = 1000; //may also need to change it back to 0
		console.log("overshoot");
	}
	// do what is to be done
	time();
	expected += interval;
	setTimeout(step, Math.max(0, interval - dt)); // take into account drift
}

/**
 * @todo
 *🟢 add a timer to the clock
 *🟢 get dom seconds
 *🟢 Make a time tag to put the time in
 *🟢 Comment some shit
 */
