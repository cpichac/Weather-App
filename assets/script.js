
let cityBtn = document.querySelector("#btn");
let cardBox = document.querySelector("#card-holder");
let inputEl = document.querySelector("#searched-city").value;
let timeEl  = dayjs().format('ddd MM DD, YYYY HH:mm:SS' );

cityBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(inputEl)

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputEl.value}&limit=5&appid=ddc2033f95ec7f98e923200aba974c7f`)
        .then(response => response.json())
        .then(citiesFound => {
            let firstCity=citiesFound[0];
            console.log(firstCity.lat);
            console.log(firstCity.lon);


            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=ddc2033f95ec7f98e923200aba974c7f`)
        })


        .then(response => response.json())
        .then(eachDay => {
            console.log(eachDay);
            // let searchedCity = eachDay[0].name;



            for (let i = 0; i < 5; i++) {
                //Creating the elements to make the weather cards
                let weatherCard = document.createElement("div");
                let time = document.createElement("p");
                let dayIcon = document.createElement("img");
                let temp = document.createElement("p");

                //adding the values to the elements
                dayIcon.textContent = eachDay.list[i].weather[4];
                temp.textContent = eachDay.list[i].main[0];


                //appended elements to the div
                cardBox.append(weatherCard);
                weatherCard.append(dayIcon);
                weatherCard.append(temp);
                weatherCard.append(time);

                
            }

            
            

        })
})

// lastSearchedCity()

// function lastSearchedCity() {

    
// }