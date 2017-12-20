var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();

	setupSquares();

	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
	//Add click listeners to squares
		squares[i].addEventListener("click", function() {
			// Grab Color of picked square
			var clickedColor = this.style.backgroundColor;

			// Compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColor(clickedColor)
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"
			}
		})
	}
}

function reset() {
	colors = generateRandomColors(numSquares);

	//pick a new random color from array
	pickedColor = pickRandomColor();

	//Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	//assign colors to squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
})

function changeColor(color) {
	// Loop through all squares
	// Change each color to match given color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	//Make an array
	var arr = [];

	//Add num random colors to array
	 for (var i = 0; i < num; i++) {
	 	arr.push(randomColor());
	 }

	//return that array
	return arr;
}

function randomColor() {
	//Pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);

	//Pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);

	//Pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}