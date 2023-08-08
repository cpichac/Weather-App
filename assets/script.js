
let cityBtn = document.querySelector("#btn");
let cardBox = document.querySelector("#card-holder");


// cityBtn.onclick = function (event) {

// })

cityBtn.addEventListener("click", function(event){
    let inputEl = document.querySelector("#searched-city").value;

    event.preventDefault();
    console.log(inputEl)

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputEl}&limit=5&appid=ddc2033f95ec7f98e923200aba974c7f`)

        .then(response => response.json())
        .then(citiesFound => {
            let firstCity=citiesFound[0];
            console.log(citiesFound);
            console.log(firstCity.lat);
            console.log(firstCity.lon);

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=ddc2033f95ec7f98e923200aba974c7f`)
        })
        .then(response => response.json())
        .then(days => {
            // console.log(days)
            let eachDay = days.list;
            console.log(eachDay);
            console.log(eachDay[0]);

            // let todayFormat = ;

            let todayName = document.createElement("h2");
            let todayDate = document.createElement("p");
            let todayTemp = document.createElement("p");
            let todayHolder = document.querySelector("#todays-weather");

            let today = dayjs(eachDay[0].dt_txt).format("ddd MMM/DD/YYYY")

            todayTemp.setAttribute("class", "text-detail");
            todayDate.setAttribute("class", "text-detail");
            todayName.setAttribute("class", "text-detail");

            todayName.textContent = inputEl;
            todayDate.textContent = "Date: " + today;
            todayTemp.textContent = "Temp: " + eachDay[0].main.temp;

            todayHolder.append(todayName);
            todayHolder.append(todayDate);
            todayHolder.append(todayTemp);

            for (let i = 0; i < 5; i++ ) {
                //Creating the elements to make the weather cards
                let weatherCard = document.createElement("div");
                let time = document.createElement("p");
                let dayIcon = document.createElement("img");
                let temp = document.createElement("p");
                let cityName = document.createElement("h3");

                let date = dayjs(eachDay[i].dt_txt).format("ddd hh:mm A");


                //adding the values to the elements
                dayIcon.textContent = eachDay[i].weather[0].icon;
                console.log(eachDay[i].weather[0].icon);
                temp.textContent = "Temp: " + eachDay[i].main.temp;
                console.log(eachDay[i].main.temp);
                time.textContent = "Date: " + date;
                console.log(eachDay[i].dt_txt);
                cityName.textContent = inputEl;
                console.log(inputEl)

                weatherCard.setAttribute("class", "weather-cards");
                temp.setAttribute("class", "weather-temp text-detail");
                time.setAttribute("class", "text-detail");
                cityName.setAttribute("class", "text-detail");

                //appended elements to the div
                cardBox.append(weatherCard);
                weatherCard.append(cityName);
                weatherCard.append(time);
                weatherCard.append(dayIcon);
                weatherCard.append(temp);
                

            }

        })
})


// lastSearchedCity()

// function lastSearchedCity() {

    
