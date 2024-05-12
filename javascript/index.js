function updateTime() {
  // Cardiff
  let cardiffElement = document.querySelector("#cardiff");
  if (cardiffElement) {
    let cardiffDateElement = cardiffElement.querySelector(".date");
    let cardiffTimeElement = cardiffElement.querySelector(".time");
    let cardiffTime = moment().tz("Europe/London");

    cardiffDateElement.innerHTML = cardiffTime.format("MMMM Do, YYYY");
    cardiffTimeElement.innerHTML = cardiffTime.format("h:mm:ss A");
  }

  // Sendai
  let sendaiElement = document.querySelector("#sendai");
  if (sendaiElement) {
    let sendaiDateElement = sendaiElement.querySelector(".date");
    let sendaiTimeElement = sendaiElement.querySelector(".time");
    let sendaiTime = moment().tz("Asia/Tokyo");

    sendaiDateElement.innerHTML = sendaiTime.format("MMMM Do, YYYY");
    sendaiTimeElement.innerHTML = sendaiTime.format("h:mm:ss A");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss A")}</div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
