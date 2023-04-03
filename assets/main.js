// TODO: Refactor to reduce code bloat


// Possible solution to avoid excess code:
// Grab HTML elements with querySelectorAll and plug data in using for loop and switch statement?
const d0DateDisplay = document.querySelector("#d-zero-date");
const d0WeatherDisplay = document.querySelector("#d-zero-weather");
const d0TempDisplay = document.querySelector("#d-zero-temp");
const d0WindDisplay = document.querySelector("#d-zero-wind");
const d0HumidDisplay = document.querySelector("#d-zero-humid");

const d1DateDisplay = document.querySelector("#d-one-date");
const d1WeatherDisplay = document.querySelector("#d-one-weather");
const d1TempDisplay = document.querySelector("#d-one-temp");
const d1WindDisplay = document.querySelector("#d-one-wind");
const d1HumidDisplay = document.querySelector("#d-one-humid");

const d2DateDisplay = document.querySelector("#d-two-date");
const d2WeatherDisplay = document.querySelector("#d-two-weather");
const d2TempDisplay = document.querySelector("#d-two-temp");
const d2WindDisplay = document.querySelector("#d-two-wind");
const d2HumidDisplay = document.querySelector("#d-two-humid");

const d3DateDisplay = document.querySelector("#d-three-date");
const d3WeatherDisplay = document.querySelector("#d-three-weather");
const d3TempDisplay = document.querySelector("#d-three-temp");
const d3WindDisplay = document.querySelector("#d-three-wind");
const d3HumidDisplay = document.querySelector("#d-three-humid");

const d4DateDisplay = document.querySelector("#d-four-date");
const d4WeatherDisplay = document.querySelector("#d-four-weather");
const d4TempDisplay = document.querySelector("#d-four-temp");
const d4WindDisplay = document.querySelector("#d-four-wind");
const d4HumidDisplay = document.querySelector("#d-four-humid");

const d5DateDisplay = document.querySelector("#d-five-date");
const d5WeatherDisplay = document.querySelector("#d-five-weather");
const d5TempDisplay = document.querySelector("#d-five-temp");
const d5WindDisplay = document.querySelector("#d-five-wind");
const d5HumidDisplay = document.querySelector("#d-five-humid");

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return Math.floor(total / count);
}

// Based on code from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
const mostFrequent = function(array) {
    // Stores count of most frequent item
    let mostFreq = 1;

    // Temporary count to compare against mostFreq
    let count = 0;

    // Stores most frequent item to be returned
    let output;

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                // Increases temp count for every subsequent occurence of the item
                count++;
            }
            // If temp count is more than mostFreq, then the target item (array[i]) is the current most frequent
            if (mostFreq < count) {
                // Sets mostFreq to the number of times the item appeared
                mostFreq = count;
                output = array[i];
            }
        }
        // Resets the temp count for the next item in the for loop
        count = 0
    }

    return output;
}

let city = "London";
let day0 = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let day1 = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let day2 = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let day3 = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let day4 = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let day5 = {
    date: "",
    weather: "",
    temp: "",
    windSpeed: "",
    humidity: "",
}

let requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=d9ae7cf85080aa6d6b35191acb4ad9b0`;

const populateCards = function() {
    d0DateDisplay.textContent = day0.date;
    d0WeatherDisplay.textContent = day0.weather;
    d0TempDisplay.textContent = `${day0.temp} °F`;
    d0WindDisplay.textContent = `${day0.windSpeed} mph`;
    d0HumidDisplay.textContent = `${day0.humidity}%`;

    d1DateDisplay.textContent = day1.date;
    d1WeatherDisplay.textContent = day1.weather;
    d1TempDisplay.textContent = `${day1.temp} °F`;
    d1WindDisplay.textContent = `${day1.windSpeed} mph`;
    d1HumidDisplay.textContent = `${day1.humidity}%`;

    d2DateDisplay.textContent = day2.date;
    d2WeatherDisplay.textContent = day2.weather;
    d2TempDisplay.textContent = `${day2.temp} °F`;
    d2WindDisplay.textContent = `${day2.windSpeed} mph`;
    d2HumidDisplay.textContent = `${day2.humidity}%`;

    d3DateDisplay.textContent = day3.date;
    d3WeatherDisplay.textContent = day3.weather;
    d3TempDisplay.textContent = `${day3.temp} °F`;
    d3WindDisplay.textContent = `${day3.windSpeed} mph`;
    d3HumidDisplay.textContent = `${day3.humidity}%`;

    d4DateDisplay.textContent = day4.date;
    d4WeatherDisplay.textContent = day4.weather;
    d4TempDisplay.textContent = `${day4.temp} °F`;
    d4WindDisplay.textContent = `${day4.windSpeed} mph`;
    d4HumidDisplay.textContent = `${day4.humidity}%`;

    d5DateDisplay.textContent = day5.date;
    d5WeatherDisplay.textContent = day5.weather;
    d5TempDisplay.textContent = `${day5.temp} °F`;
    d5WindDisplay.textContent = `${day5.windSpeed} mph`;
    d5HumidDisplay.textContent = `${day5.humidity}%`;
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // debug
        console.log(data);

        let date = dayjs.unix(data.list[0].dt);

        let day0Date = dayjs(date).format("MM/DD");
        let day1Date = date.add(1, "day");
        let day2Date = date.add(2, "day");
        let day3Date = date.add(3, "day");
        let day4Date = date.add(4, "day");
        let day5Date = date.add(5, "day");

        let day0WeatherArray = [];
        let day0TempArray = [];
        let day0WindSpeedArray = [];
        let day0HumidityArray = [];

        let day1WeatherArray = [];
        let day1TempArray = [];
        let day1WindSpeedArray = [];
        let day1HumidityArray = [];

        let day2WeatherArray = [];
        let day2TempArray = [];
        let day2WindSpeedArray = [];
        let day2HumidityArray = [];

        let day3WeatherArray = [];
        let day3TempArray = [];
        let day3WindSpeedArray = [];
        let day3HumidityArray = [];

        let day4WeatherArray = [];
        let day4TempArray = [];
        let day4WindSpeedArray = [];
        let day4HumidityArray = [];

        let day5WeatherArray = [];
        let day5TempArray = [];
        let day5WindSpeedArray = [];
        let day5HumidityArray = [];

        for(let i = 0; i < data.list.length; i++) {
            let itemDate = dayjs.unix(data.list[i].dt);

            if (dayjs(itemDate).format("MM/DD") === dayjs(date).format("MM/DD")) {
                day0WeatherArray.push(data.list[i].weather[0].main);
                day0TempArray.push(data.list[i].main.temp);
                day0WindSpeedArray.push(data.list[i].wind.speed);
                day0HumidityArray.push(data.list[i].main.humidity);
            } else if (dayjs(itemDate).format("MM/DD") === dayjs(day1Date).format("MM/DD")) {
                day1WeatherArray.push(data.list[i].weather[0].main);
                day1TempArray.push(data.list[i].main.temp);
                day1WindSpeedArray.push(data.list[i].wind.speed);
                day1HumidityArray.push(data.list[i].main.humidity);
            } else if (dayjs(itemDate).format("MM/DD") === dayjs(day2Date).format("MM/DD")) {
                day2WeatherArray.push(data.list[i].weather[0].main);
                day2TempArray.push(data.list[i].main.temp);
                day2WindSpeedArray.push(data.list[i].wind.speed);
                day2HumidityArray.push(data.list[i].main.humidity);
            } else if (dayjs(itemDate).format("MM/DD") === dayjs(day3Date).format("MM/DD")) {
                day3WeatherArray.push(data.list[i].weather[0].main);
                day3TempArray.push(data.list[i].main.temp);
                day3WindSpeedArray.push(data.list[i].wind.speed);
                day3HumidityArray.push(data.list[i].main.humidity);
            } else if (dayjs(itemDate).format("MM/DD") === dayjs(day4Date).format("MM/DD")) {
                day4WeatherArray.push(data.list[i].weather[0].main);
                day4TempArray.push(data.list[i].main.temp);
                day4WindSpeedArray.push(data.list[i].wind.speed);
                day4HumidityArray.push(data.list[i].main.humidity);
            } else if (dayjs(itemDate).format("MM/DD") === dayjs(day5Date).format("MM/DD")) {
                day5WeatherArray.push(data.list[i].weather[0].main);
                day5TempArray.push(data.list[i].main.temp);
                day5WindSpeedArray.push(data.list[i].wind.speed);
                day5HumidityArray.push(data.list[i].main.humidity);
            }
        }

        day0.weather = mostFrequent(day0WeatherArray);
        day0.temp = calculateAverage(day0TempArray);
        day0.windSpeed = calculateAverage(day0WindSpeedArray);
        day0.humidity = calculateAverage(day0HumidityArray);
        day0.date = dayjs(day0Date).format("MM/DD/YYYY");

        day1.weather = mostFrequent(day1WeatherArray);
        day1.temp = calculateAverage(day1TempArray);
        day1.windSpeed = calculateAverage(day1WindSpeedArray);
        day1.humidity = calculateAverage(day1HumidityArray);
        day1.date = dayjs(day1Date).format("MM/DD/YYYY");

        day2.weather = mostFrequent(day2WeatherArray);
        day2.temp = calculateAverage(day2TempArray);
        day2.windSpeed = calculateAverage(day2WindSpeedArray);
        day2.humidity = calculateAverage(day2HumidityArray);
        day2.date = dayjs(day2Date).format("MM/DD/YYYY");

        day3.weather = mostFrequent(day3WeatherArray);
        day3.temp = calculateAverage(day3TempArray);
        day3.windSpeed = calculateAverage(day3WindSpeedArray);
        day3.humidity = calculateAverage(day3HumidityArray);
        day3.date = dayjs(day3Date).format("MM/DD/YYYY");

        day4.weather = mostFrequent(day4WeatherArray);
        day4.temp = calculateAverage(day4TempArray);
        day4.windSpeed = calculateAverage(day4WindSpeedArray);
        day4.humidity = calculateAverage(day4HumidityArray);
        day4.date = dayjs(day4Date).format("MM/DD/YYYY");

        day5.weather = mostFrequent(day5WeatherArray);
        day5.temp = calculateAverage(day5TempArray);
        day5.windSpeed = calculateAverage(day5WindSpeedArray);
        day5.humidity = calculateAverage(day5HumidityArray);
        day5.date = dayjs(day5Date).format("MM/DD/YYYY");

        populateCards();
    });
