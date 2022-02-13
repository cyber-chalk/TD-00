//gets the h2 element so it can append the time in there
let timeContainer = document.getElementById("display-time");
//makes a time tag so computers can read it and also so I can change the time
let newSpan = document.createElement("time");
newSpan.setAttribute = ("id", "time");
timeContainer.append(newSpan);

//lets the variables be global
let timeArr;
let sec;
let min;
let hour;

//gets the time and puts it into logical form
let time = async () => {
	await newSpan;
	d = new Date();
	sec = d.getSeconds();
	min = d.getMinutes();
	hour = d.getHours();

	newSpan.innerText =
		/* "0" + h + ":" + ("0" + m).substr(-2) + ":" + ("0" + s) */
		hour + ":" + min + ":" + sec;
	// convert to array
	timeArr = [sec];

	//check if time is behind
	let s2 = d.getSeconds();
	while (sec != s2) {
		console.log("exede");
		time();
	}
};

//get seconds in the DOM
//you only need to get the last number of the DOM time.
setInterval(time, 100);

/* Tasks
🔴 put a while loop in the function to update it
🟢 Make a time tag to put the time in
🟢 Comment some shit
*/
logo = async () => {
	await time();
	let domArray = Array.from(newSpan.innerText);
	console.log(domArray);
	return domArray
};
logo();
