let lat = 48.8;
let lon = 2.3;
let apiKey = "63111eac8b82fd4ce9fc52c713d3b2f8";
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
let temp = document.getElementById("Temperature");
//console.log(temp);
fetch(url)
    .then(resp =>{
        if(!resp.ok) throw new Error(resp.statusText);
        return resp.json();
    })
    .then(data=>{
        //console.log(data);
        //console.log("Hello")
        //console.log(data);
        //console.log(data.clouds);
        printData(data);
    })

//console.log("Hello");


    function printData(weather){
        console.log(weather);
        document.getElementById("Temperature").innerHTML = weather.main.temp;
        console.log("Hello");
    }