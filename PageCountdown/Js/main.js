const countdown = document.querySelector(".countdown");

// Set Launch Date (ms)

const launchDate = new Date("March 15 2021 23:59:59 GMT-0600 (CST)").getTime();

//Update every second
const intvl = setInterval(() => {
  //Todays date and time in (ms)
  const now = new Date().getTime();

  //Distance from now to the launch date
  const distance = launchDate - now;

  //Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display result
  countdown.innerHTML = ` 
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

  //If lanuch date is passed
  if (distance < 0) {
    //Stop countdown
    clearInterval(intvl);
    //Style and output text
    countdown.style.color = "#fff";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
