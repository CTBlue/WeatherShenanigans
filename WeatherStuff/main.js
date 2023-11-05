let apiKey = "63111eac8b82fd4ce9fc52c713d3b2f8";
let temp = document.getElementById("Temperature");

//let htmlLat = document.getElementById("htmlLat").innerHTML;
//let htmlLong = document.getElementById("htmlLat").innerHTML;
function calcWeather(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      //console.log(data);
      //console.log("Hello")
      console.log(data);
      //console.log(data.clouds);
      printData(data);
    });
}

//console.log("Hello");

function printData(weather) {
  console.log(weather.main.temp);
  temp.innerHTML = weather.main.temp;
}

//this function is called when the user clicks "Weather Button" in HTML
function currentLocWeather() {
    console.log("We're in here currentLocWeather");
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(processCurrentWeather);    
    } else{
        temp.innerHTML = "GeoLocation is not currently working";
        console.log("failed");
    }
    
}

function processCurrentWeather(position){
    console.log("We're in here processCurrentWeather");
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    calcWeather(latitude, longitude);
    
}
