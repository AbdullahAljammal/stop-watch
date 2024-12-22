  // JavaScript code from your example goes here
  let hour = 0; 
  let seconds = 0; 
  let tens = 0; 
  let OutputSeconds = document.getElementById("second");
  let OutputTens = document.getElementById("tens");
  let buttonStart = document.getElementById("btn-start");
  let buttonStop = document.getElementById("btn-stop");
  let buttonReset = document.getElementById("btn-reset");
  let hrs = document.getElementById("hours");
  let Interval;

  function startTimer() {
      tens++;
      if (tens > 99) { // Adjusted to match real-time (1 second = 100 tens for milliseconds)
          seconds++;
          tens = 0; 
      }

      if (seconds > 59) {
          hour++;
          seconds = 0; 
      }

      OutputTens.innerHTML = (tens < 10 ? "0" : "") + tens; // Format tens
      OutputSeconds.innerHTML = (seconds < 10 ? "0" : "") + seconds; // Format seconds
      hrs.innerHTML = (hour < 10 ? "0" : "") + hour + ":"; // Format hours
  }

  buttonStart.addEventListener('click', () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
  });

  buttonStop.addEventListener('click', () => {
      clearInterval(Interval);
  });

  buttonReset.addEventListener('click', () => {
      clearInterval(Interval);
      hour = 0;
      seconds = 0;
      tens = 0;
      OutputSeconds.innerHTML = "00"; // Reset seconds display
      OutputTens.innerHTML = "00"; // Reset tens display
      hrs.innerHTML = "00:"; // Reset hours display
  });