(function () {
  function countdown(date, callback) {
    const daysElem = document.querySelector(".days");
    const hoursElem = document.querySelector(".hours");
    const minutesElem = document.querySelector(".minutes");
    const secondsElem = document.querySelector(".seconds");
    const daysTextElem = document.querySelector(".days_text");
    const hoursTextElem = document.querySelector(".hours_text");
    const minutesTextElem = document.querySelector(".minutes_text");
    const secondsTextElem = document.querySelector(".seconds_text");

    function updateCountdown() {
      const endDate = new Date(date);
      const now = new Date();
      const timeLeft = endDate - now;

      if (timeLeft < 0) {
        clearInterval(intervalId);
        if (typeof callback === "function") {
          callback();
        }
        return;
      }

      const oneSecond = 1000;
      const oneMinute = oneSecond * 60;
      const oneHour = oneMinute * 60;
      const oneDay = oneHour * 24;

      let days = Math.floor(timeLeft / oneDay);
      let hours = Math.floor((timeLeft % oneDay) / oneHour);
      let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
      let seconds = Math.floor((timeLeft % oneMinute) / oneSecond);

      days = String(days).padStart(2, "0");
      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");

      daysElem.textContent = days;
      hoursElem.textContent = hours;
      minutesElem.textContent = minutes;
      secondsElem.textContent = seconds;

      daysTextElem.textContent = days === "01" ? "day" : "days";
      hoursTextElem.textContent = hours === "01" ? "hour" : "hours";
      minutesTextElem.textContent = minutes === "01" ? "minute" : "minutes";
      secondsTextElem.textContent = seconds === "01" ? "second" : "seconds";
    }

    const intervalId = setInterval(updateCountdown, 1000);
  }

  const countdownEl = document.querySelector(".countdown");
  countdown(new Date(countdownEl.dataset.date), () => {
    countdownEl.textContent = "The countdown has ended!";
  });
})();
