const cYear = document.getElementById("currentYear");
const cDays = document.getElementById("days");
const cHour = document.getElementById("hours");
const cMinutes = document.getElementById("minutes");
const cSeconds = document.getElementById("seconds");



function updateClock() {

  // Get the current date

const currentDate = new Date();

// Get the date for the next year
const nextYearDate = new Date(currentDate.getFullYear() + 1, 0, 1); // January 1st of next year

// Calculate the time difference in milliseconds
const timeDifference = nextYearDate - currentDate;

// Calculate the number of days by dividing milliseconds by milliseconds per day (24 * 60 * 60 * 1000)
const daysUntilNextYear = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

// const hoursUntilNextDay = Math.floor(timeDifference / 24 * 60 * 1000)

// console.log(`Number of hours until next day: ${hoursUntilNextDay}`);

const endOfDay = new Date(currentDate);
endOfDay.setHours(23, 59, 59, 999);

// Calculate the time difference in milliseconds between the end of the day and the current time
const timeDifferencehours = endOfDay - currentDate;

// Calculate the remaining hours by dividing milliseconds by milliseconds per hour (60 * 60 * 1000)
const remainingHours = Math.floor(timeDifferencehours / (60 * 60 * 1000));

const endOfHour = new Date(currentDate);
endOfHour.setMinutes(59);
endOfHour.setSeconds(59);

// Calculate the time difference in milliseconds between the end of the hour and the current time
const timeDifferenceminutes = endOfHour - currentDate;

// Calculate the remaining minutes by dividing milliseconds by milliseconds per minute (60 * 1000)
const remainingMinutes = Math.floor(timeDifferenceminutes / (60 * 1000));


const endOfMinute = new Date(currentDate);
endOfMinute.setSeconds(59);

// Calculate the time difference in milliseconds between the end of the minute and the current time
const timeDifferenceSeconds = endOfMinute - currentDate;

// Calculate the remaining seconds by dividing milliseconds by 1000 (since there are 1000 milliseconds in a second)
const remainingSeconds = Math.floor(timeDifferenceSeconds / 1000);

// formatting adding 0 initially if it is less than 10 to show the double number

const formattedDays = daysUntilNextYear < 10 ? '0' + daysUntilNextYear : daysUntilNextYear;
const formattedHours = remainingHours < 10 ? '0' + remainingHours : remainingHours;
const formattedMinutes = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;


  cYear.textContent = new Date().getFullYear();
  cDays.textContent = formattedDays;
  cHour.textContent = formattedHours;
  cMinutes.textContent = formattedMinutes;
  cSeconds.textContent = formattedSeconds;

  // Update the clock every 1000 milliseconds (1 second)
  setTimeout(() => {
    updateClock();
  }, 1000);

}

updateClock();