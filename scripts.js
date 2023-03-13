function getMoonPhases () {
  // We get today's date by doing new Date()
  var todaysDate = new Date();

  // We then extract the year and month, so that we can add those variables to the url
  var year = todaysDate.getFullYear();
  var month = todaysDate.getMonth();

  fetch('https://www.icalendar37.net/lunar/api/?year=' + year + '&month=' + (month + 1))
    .then(response => response.json())
    .then(data => {
        // This is where you populate the html elements and element attributes with values from the result
    })
    .catch(error => console.error(error));
}