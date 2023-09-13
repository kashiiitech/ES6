console.log("kashif");

const API_KEY = "48c6b5d5675c43525ee6968f1296ff26";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
  newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
  document.body.appendChild(newPara);
}

async function showWeather(){
  // let latitude = 15.3333;
  // let longitude = 74.0833;

  try {

    let city = "goa";

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

  const data = await response.json();
  console.log("Weather data ....", data);


    //  function to show the data on UI
  renderWeatherInfo(data);


  }

  catch(err) {
    // handle the error here
  }
  

}

async function getCustomWeatherDetails() {
  let latitude = 15.63333;
  let longitude = 18.3333;

  let result = fetch(`https://api.openweathermap.org/data/3.0/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  let data = (await result).json();

  console.log(data)

}

function switchTab(clickedTab) {
  apiErrorContainer.classList.remove("active");

  if(clickedTab != currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");
    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }
    // console.log("Current Tab", currentTab)
  }
}

// find the latitude and longitude of our current location

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    console.log("No geoLocation Support");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;

  console.log(lat);
  console.log(longi);
}

