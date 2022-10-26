function getPosition(position) {    //geolocation position
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getWeather(latitude,longitude); 
}
function showError(error) {
  alert(`${error.message}`);
}

navigator.geolocation.getCurrentPosition(getPosition, showError);

function getWeather(latitude,longitude) {   //openweathermap temperature
  const key = '812515406c6492f3b1842ca817caf473';
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial;`
  fetch(api)
  .then((response) => response.json())
  .then((data) => {
    let temperature = document.getElementById("temp");   
    let TT = Math.round(data.main.temp - 273)+'&#8451';
    temperature.innerHTML = TT;
}); 
}

setInterval(display, 1000);

function display() {    // Date and Time
let date = new Date(),
    hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds(),
   month = date.getMonth(),
    days = date.getDay(),
 datenum = date.getDate(),
    year = date.getFullYear();
let period = "AM";

if (hour == 0) {
    hour = 12;
}
if (hour > 12) {
    hour = hour - 12; 
    period = "PM";
}
if (hour >= 12) {
    period = "PM";
}
/*if (minute < 10 ) {
    minute = "0" + minute; 
}
if (second < 10 ) {
    second = "0" + second; 
}
if (hour < 12 ) {
    hour = "0" + hour; 
}
if (datenum < 10) {
    datenum = "0" + datenum; 
}*/
Number.prototype.join = function(digits) {
    for(var d = this.toString(); d.length < digits; d = 0 + d);
    return d;
}
const greets = ["Special Sunday", "Magnificent Monday", "Terrific Tuesday", "Wonderful Wednesday", 
               "Thankful Thursday", "Fabulous Friday",   "Shiny Saturday"];

const quotes = ["Time and Tide wait for None", "Time is Long", "Lost Time is Never Found again", "Time is the Only thing",
               "Time Matters", "Make Use of Time", "Value your Time"];

const week = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]

const ids = ["greet", "quote", "day", "hour", "minute", "second", "period", "month", "datenum", "year"];

const values = [greets[days], quotes[days], week[days] , hour.join(2), minute.join(2), second.join(2), period , months[month], datenum.join(2), year];

for (let i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).innerHTML = values[i];
}
}
