/** * @global *if accsesing these variables before the time function is initiated make sure to use @async/@await */
let x = 0;
let sec;
let min;
let hour;
let d;

//makes a time tag so computers can read it and also so I can change the time
const newSpan = document.createElement("time");
newSpan.setAttribute = ("id", "time");

const timeContainer = document.getElementById("display-time");
timeContainer.append(newSpan);

const military = (switch12) => {
	if (hour > 12) {
		x = 12;
	}
	if (switch12) {
		x -= 12;
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

		console.log("false", i);
		return;
	}
	console.log("true", i);
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
async function step() {
	var dt = Date.now() - expected; // the drift (positive for overshooting)
	if (dt > interval) {
		let stopTimeout;
		if (document.visibilityState == "visible") {
			time();
		}
		function wait() {
			if (document.visibilityState == "hidden") {
				document.visibilityState;
				stopTimeout = true;
				let n = 0;
				n++;
				console.log(n);
			} else if (document.visibilityState == "visible") {
				stopTimeout = false;
				time();
			}
		}
		wait();
		if (stopTimeout) {
			setInterval(wait, 1000);
		}
		expected += interval;
		setTimeout(step, Math.max(0, interval - dt));
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
// this is an error handler
//pause the application until the window is in focus again
