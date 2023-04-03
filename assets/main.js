// TODO: Refactor to reduce code bloat

const dateElArray = document.querySelectorAll(".date");
const weatherElArray = document.querySelectorAll(".weather");
const tempElArray = document.querySelectorAll(".temp");
const windElArray = document.querySelectorAll(".wind");
const humidElArray = document.querySelectorAll(".humid");

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

// Populates elements on data cards with weather data
const populateCards = function() {
    for (let i = 0; i < 6; i++) {
        let day;
        // Sets day to object of relevant day number
        switch (i) {
            case 0:
                day = day0;
                break;
            case 1:
                day = day1;
                break;
            case 2:
                day = day2;
                break;
            case 3:
                day = day3;
                break;
            case 4:
                day = day4;
                break;
            case 5:
                day = day5;
                break;
        }

        // Respective element of array will have text content set to data of respective day object
        dateElArray[i].textContent = day.date;
        weatherElArray[i].textContent = day.weather;
        tempElArray[i].textContent = `${day.temp} °F`;
        windElArray[i].textContent = `${day.windSpeed} mph`;
        humidElArray[i].textContent = `${day.humidity}%`;
    }
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
