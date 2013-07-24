window.onload = function() {
	// Tracking mouse position
	document.getElementById("home").onmouseover = function(event){
		console.log(event);
		document.getElementById("x-coord").innerHTML = event.x;
		document.getElementById("y-coord").innerHTML = event.y;
	};


	// We should only have ONE of any given id
	// So we can assume that we've got the right one
	document.getElementById("test-box").onclick = function(event){
	  console.log("You Clicked the box!");
	};
	// It returns an array, so we need to select the first one
	document.getElementsByTagName("h1")[0].onclick = function(event){
		console.log("You clicked the H1");
	};

	// Selecting multiple H2's
	var all_h2s = document.getElementsByTagName("h2");
	for (var i = 0; i < all_h2s.length; i++) {
		all_h2s[i].onclick = function (event){
			console.log("You clicked an H2. There are multiple of these!");
		};
	};

	// This doesn't work because getElementsByClassName still returns an array
	document.getElementsByClassName("dr-seuss").onclick = function(event) {
		console.log("This isn't going to work");
	};

	// But this works!
	var all_h3s = document.getElementsByClassName("dr-seuss");
	for (var i = 0; i < all_h3s.length; i++) {
		all_h3s[i].onclick = function (event){
			console.log("I do not like green eggs and ham!");
		};
	};

	document.getElementById("danger-box").onmouseover = function(event) {
		console.log(event);
		document.getElementById("danger-box").innerHTML = "I'm sorry Dave. I can't let you open the hatch.";
	};

	document.getElementById("danger-box").onmouseout = function(event) {
		console.log(event);
		document.getElementById("danger-box").innerHTML = "It's ok. Just don't think about it again.";
	};


};











