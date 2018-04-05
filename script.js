var box = document.getElementById('box'); // get the box
var button = document.getElementById('button'); // get the button

var boxColor; // stores the current color of the user's box
var serverColor; // stores the color of the box on the server

var getColorRequest = new XMLHttpRequest(); // AJAX request to get the color from the server
var changeColorRequest = new XMLHttpRequest(); // AJAX request to change the color on the server

// sends a getColorRequest
function getColor() {
  boxColor = box.className; // get the current color of the box (for the initial call to getColor(), this will be an empty string)

  getColorRequest.open('GET', '/getColor.php?userColor=' + boxColor, true); // prepare a GET request to /getColor.php, including the color of the user's box as a URL parameter
  getColorRequest.send(null); // send the request
}

// sends a changeColorRequest
function changeColor() {
  boxColor = box.className; // get the current color of the box

  changeColorRequest.open('POST', '/changeColor.php', true); // prepare a POST request to /changeColor.php
  changeColorRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  changeColorRequest.send('userColor=' + boxColor); // send the request with the box color as data
}

function toggleColor() {
  if (box.className === 'red') { // if the box is currently red
    box.className = 'blue'; // make it blue
  } else { // if the box is currently blue
    box.className = 'red'; // make it red
  }
}

getColorRequest.onload = function() {
  if (getColorRequest.status === 200) { // if the server status was ok
    boxColor = box.className; // get the current color of the user's box
    serverColor = getColorRequest.responseText; // store the server's response, the color of the box on the server

    if (serverColor === "red" || serverColor === "blue") { // if the server responded successfully
      box.className = serverColor; // update the color
    }

    getColor(); // send another getColorRequest
  }
}

getColor(); // get the initial box color from the server

button.addEventListener('click', changeColor, false); // calls changeColor() when the button is clicked
