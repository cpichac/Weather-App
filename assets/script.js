
let cityBtn = document.querySelector("#city-btn");



    fetch("https://api.openweathermap.org/geo/1.0/direct?q=Philadelphia&limit=5&appid=ddc2033f95ec7f98e923200aba974c7f")
        .then(response => response.json())
        .then(citiesFound => {
            let firstCity=citiesFound[0];
            console.log(firstCity.lat);
            console.log(firstCity.lon);


            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=ddc2033f95ec7f98e923200aba974c7f`)
        })


        .then(response => response.json())
        .then(data => {


            console.log(data);

        })