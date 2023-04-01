
// Possible solution to avoid excess code:
// Grab HTML elements with querySelectorAll and plug data in using for loop and switch statement?
const dOneDateDisplay = document.querySelector("#d-one-date");
const dOneWeatherDisplay = document.querySelector("#d-one-weather");
const dOneTempDisplay = document.querySelector("#d-one-temp");
const dOneWindDisplay = document.querySelector("#d-one-wind");
const dOneHumidDisplay = document.querySelector("#d-one-humid");

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return Math.floor(total / count);
}

// Write function to find most frequent in array to use with weather array

let city = "London";
let today = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let dayOne = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let dayTwo = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let dayThree = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let dayFour = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let dayFive = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=d9ae7cf85080aa6d6b35191acb4ad9b0`;

// Only populates day one
const populateCards = function() {
    dOneDateDisplay.textContent = dayOne.date;
    dOneWeatherDisplay.textContent = dayOne.weather;
    dOneTempDisplay.textContent = `${dayOne.temp} °F`;
    dOneWindDisplay.textContent = `${dayOne.windSpeed} mph`;
    dOneHumidDisplay.textContent = `${dayOne.humidity}%`;
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let date = dayjs.unix(data.list[0].dt);

        let startDate = dayjs(date).format("MM/DD");
        let dayOneDate = date.add(1, "day");
        let dayTwoDate = date.add(2, "day");
        let dayThreeDate = date.add(3, "day");
        let dayFourDate = date.add(4, "day");

        let todayWeatherArray = [];
        let todayTempArray = [];
        let todayWindSpeedArray = [];
        let todayHumidityArray = [];

        let dayOneWeatherArray = [];
        let dayOneTempArray = [];
        let dayOneWindSpeedArray = [];
        let dayOneHumidityArray = [];

        for(let i = 0; i < data.list.length; i++) {
            let itemDate = dayjs.unix(data.list[i].dt);

            if (dayjs(itemDate).format("MM/DD") === dayjs(date).format("MM/DD")) {
                todayWeatherArray.push(data.list[i].weather[0].main);
                todayTempArray.push(data.list[i].main.temp);
                todayWindSpeedArray.push(data.list[i].wind.speed);
                todayHumidityArray.push(data.list[i].main.humidity);
            } else if (dayjs(itemDate).format("MM/DD") === dayjs(dayOneDate).format("MM/DD")) {
                dayOneWeatherArray.push(data.list[i].weather[0].main);
                dayOneTempArray.push(data.list[i].main.temp);
                dayOneWindSpeedArray.push(data.list[i].wind.speed);
                dayOneHumidityArray.push(data.list[i].main.humidity);
            }
        }

        // waiting on mostFrequent function
        // dayOne.weather = mostFrequentFunction(dayOneWeatherArray);
        dayOne.temp = calculateAverage(dayOneTempArray);
        dayOne.windSpeed = calculateAverage(dayOneWindSpeedArray);
        dayOne.humidity = calculateAverage(dayOneHumidityArray);
        dayOne.date = dayjs(dayOneDate).format("MM/DD/YYYY");

        populateCards();
    });
