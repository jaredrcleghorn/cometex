<?php

  $userColor = $_POST["userColor"]; // get the color of the user's box
  $serverColor = trim(file_get_contents("color.txt")); // get the color of the box stored on the server (w/o trim the color is followed by a newline)

  function toggleServerColor($serverColor) {
    if ($serverColor == "red") { // if the color stored on the server is red
      $filePutSuccessful = file_put_contents("color.txt", "blue"); // change it to blue
    }
    else if ($serverColor == "blue") { // if the color stored on the server is blue
      $filePutSuccessful = file_put_contents("color.txt", "red"); // change it to red
    }
  }

  if ($userColor == $serverColor) { // if the user and the server are on the same color
    toggleServerColor($serverColor); // toggle the server's color
  }

?>
