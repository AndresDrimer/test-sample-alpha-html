/////////// hamburguer logic ////////////////////

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").classList.add("show");
  document.getElementById("close").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menu").classList.remove("show");
  document.getElementById("close").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
});



/////////////// counter logic //////////////////

function startCountDown(duration) {
  let secondsRemaining = duration;
  let daysElement = document.querySelector("#days");
  let hoursElement = document.querySelector("#hours");
  let minutesElement = document.querySelector("#minutes");
  let secondsElement = document.querySelector("#seconds");

  let countInterval = setInterval(function () {
    let days = parseInt(secondsRemaining / (60 * 60 * 24));
    let hours = parseInt((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
    let minutes = parseInt((secondsRemaining % (60 * 60)) / 60);
    let seconds = parseInt(secondsRemaining % 60);

    daysElement.textContent = `${days.toString().padStart(2, "0")}`;
    hoursElement.textContent = `${hours.toString().padStart(2, "0")}`;
    minutesElement.textContent = `${minutes.toString().padStart(2, "0")}`;
    secondsElement.textContent = `${seconds.toString().padStart(2, "0")}`;

    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining < 0) {
      clearInterval(countInterval);
    }
  }, 1000);
}

window.onload = function () {
  var duration = 60 * 60 * 24 * 7; // one week
  startCountDown(duration); //starting counter
};

///////////////////accordion logic///////////

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("img");
    if (content.style.maxHeight) {
      // if it´s expanded, we contract it
      content.style.maxHeight = null;
      // If icon is rotated, we put it back as it is originally and change color
      icon.classList.remove("rotated");
      icon.classList.remove('color-changed');
    } else {
      //if contracted, we expand it
      content.style.maxHeight = content.scrollHeight + "px";
      // If icon is not rotated, we rotate it and change color
      icon.classList.add("rotated");
      icon.classList.add('color-changed');
    }
  });
});
