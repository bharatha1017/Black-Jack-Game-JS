function generate() {
  let selected;
  let total = parseInt(document.getElementById("total").innerHTML);
  do {
    selected = Math.floor((Math.random() * 100) / 7.6);
    // console.log(selected);
  } while (selected == 0);
  total += selected;

  if (total > 21) {
    addImg(total, selected);
    displayMessage("You've lost! Try again!!", "red");
    switchButtons();
  } else if (total == 21) {
    addImg(total, selected);
    displayMessage(
      "Congratulations! You've won! You can play again!",
      "yellow"
    );
    switchButtons();
  } else {
    addImg(total, selected);
    displayMessage("Do you want to add a new card?");
  }
}

function displayMessage(message, color = "white") {
  document.getElementById("message").innerHTML = message;
  document.getElementById("message").style.color = color;
  document.getElementById("message").style.display = "block";
}

function addImg(total, selected) {
  document.getElementById("total").innerHTML = total;
  const img = document.createElement("img");
  img.src = "images/" + selected + ".png";
  img.style.height = "180px";
  document.body.appendChild(img);
}

function switchButtons() {
  document.getElementById("btn-generate").style.display = "none";
  document.getElementById("btn-reset").style.display = "block";
}

function resetAll() {
  location.reload();
}
