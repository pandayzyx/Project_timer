
// Declaration of all global varibles , buttons required and inputs for values
var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");
var resetbtn = document.getElementById("reset");
var div = document.getElementsByClassName("floatleft");
var inputs = document.querySelectorAll("input");
var x;


//Function to start timer
function start() {
	var hrs = Number(document.getElementById("hrs").value);
	var mins = Number(document.getElementById("mins").value);
    var sec = Number(document.getElementById("sec").value);

    var totaltime = Number(sec) + Number(mins * 60) + Number(3600 * hrs);
	hrs = Math.floor(totaltime / 3600);
	var remainmins = totaltime - hrs * 3600;
	mins = Math.floor(remainmins / 60);
	sec = remainmins - mins * 60;

	if (totaltime === 0) {
    } 

    else {
        x = setInterval(function () {
            div[0].textContent = hrs;
            div[1].textContent = mins;
            div[2].textContent = sec;


			if (sec == 0 && mins > 0) {
				sec = 60;
				mins = mins - 1;
			}


            if (mins == 0 && sec == 0 && hrs > 0) {
                hrs = hrs - 1;
                sec = 60;
                mins = 59;
            }


			if (mins == 0 && sec == 0 && hrs == 0) {
				clearInterval(x);
			}
            
			sec--;

        }, 1000);
        
        // resetting all the input values
		for (i = 0; i < inputs.length; i++) {
			inputs[i].value = "";
        }
       
		startbtn.removeEventListener("click", startbtn);
	}
}
startbtn.addEventListener("click", start);



//Function to stop the timer
function stop() {
	clearInterval(x);
	inputs[0].value = Number(div[0].textContent);
	inputs[1].value = Number(div[1].textContent);
	inputs[2].value = Number(div[2].textContent);
	startbtn.addEventListener("click", start);
}
stopbtn.addEventListener("click", stop);



//Function to reset the values
function reset() {
	clearInterval(x);
	div[0].textContent = "00";
	div[2].textContent = "00";
	div[1].textContent = "00";
    startbtn.addEventListener("click", start);
    
    // resetting all the input values
	for (i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}
}
resetbtn.addEventListener("click", reset);

