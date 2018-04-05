<?php

  $userColor = $_GET["userColor"]; // get the color of the user's box (for the initial request, this will be an empty string)
  $serverColor = trim(file_get_contents("color.txt")); // get the color of the box stored on the server (w/o trim the color is followed by a newline)

  // loop until the user and server colors are different
  while ($userColor == $serverColor) {
    $serverColor = trim(file_get_contents("color.txt")); // update the server color (w/o trim the color is followed by a newline)
    continue; // continue looping
  }

  echo $serverColor; // respond with the new color

?>
