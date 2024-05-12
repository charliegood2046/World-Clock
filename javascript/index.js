function updateTime() {
  // Cardiff
  let cardiffElement = document.querySelector("#cardiff");
  let cardiffDateElement = cardiffElement.querySelector(".date");
  let cardiffTimeElement = cardiffElement.querySelector(".time");
  let cardiffTime = moment().tz("Europe/London");

  cardiffDateElement.innerHTML = cardiffTime.format("MMMM Do, YYYY");
  cardiffTimeElement.innerHTML = cardiffTime.format("h:mm:ss A");

  // Sendai
  let sendaiElement = document.querySelector("#sendai");
  let sendaiDateElement = sendaiElement.querySelector(".date");
  let sendaiTimeElement = sendaiElement.querySelector(".time");
  let sendaiTime = moment().tz("Asia/Tokyo");

  sendaiDateElement.innerHTML = sendaiTime.format("MMMM Do, YYYY");
  sendaiTimeElement.innerHTML = sendaiTime.format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
