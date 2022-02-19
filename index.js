//makes a time tag so computers can read it and also so I can change the time
const newSpan = document.createElement("time");
newSpan.setAttribute = ("id", "time");

const timeContainer = document.getElementById("display-time");
timeContainer.append(newSpan);

let military = async () => {
	await hour;
	if (hour >= 12) {
		let hourHold;
		hour -= 12;
	}

	let ampm = ["am", "pm"];
};

/** * @global *if accsesing these variables before the time function is initiated make sure to use @async/@await */

let sec;
let min;
let hour;
let d;

//gets the time and puts it into logical form
let time = () => {
	d = new Date();
	sec = d.getSeconds();
	min = d.getMinutes();
	hour = d.getHours();

	hourHold = [...hour];
	//militarty();
	newSpan.innerText =
		/* "0" + h + ":" + ("0" + m).substr(-2) + ":" + ("0" + s) */
		hourHold + ":" + min + ":" + sec;
};
time();

const interval = 1000; // ms
let expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
	var dt = Date.now() - expected; // the drift (positive for overshooting)
	if (dt > interval) {
		// something really bad happened. Maybe the browser (tab) was inactive?
		// possibly special handling to avoid futile "catch up" run
		//pause the application until the window is in focus again
		//console.log("overshoot");
		time();
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
