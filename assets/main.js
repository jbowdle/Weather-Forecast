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
    weather: [],
    temp: [],
    windSpeed: [],
    humidity: [],
}

let day1 = {
    date: "",
    weather: [],
    temp: [],
    windSpeed: [],
    humidity: [],
}

let day2 = {
    date: "",
    weather: [],
    temp: [],
    windSpeed: [],
    humidity: [],
}

let day3 = {
    date: "",
    weather: [],
    temp: [],
    windSpeed: [],
    humidity: [],
}

let day4 = {
    date: "",
    weather: [],
    temp: [],
    windSpeed: [],
    humidity: [],
}

let day5 = {
    date: "",
    weather: [],
    temp: [],
    windSpeed: [],
    humidity: [],
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

        // day data arrays will be reduced to a single value
        // Then the element arrays will be cycled through be set to the value of the respective data array
        dateElArray[i].textContent = day.date;
        weatherElArray[i].textContent = mostFrequent(day.weather);
        tempElArray[i].textContent = `${calculateAverage(day.temp)} °F`;
        windElArray[i].textContent = `${calculateAverage(day.windSpeed)} mph`;
        humidElArray[i].textContent = `${calculateAverage(day.humidity)}%`;
    }
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let date = dayjs(data.list[0].dt_txt);

        day0.date = dayjs(date).format("MM/DD/YYYY");
        day1.date = dayjs(date.add(1, "day")).format("MM/DD/YYYY");
        day2.date = dayjs(date.add(2, "day")).format("MM/DD/YYYY");
        day3.date = dayjs(date.add(3, "day")).format("MM/DD/YYYY");
        day4.date = dayjs(date.add(4, "day")).format("MM/DD/YYYY");
        day5.date = dayjs(date.add(5, "day")).format("MM/DD/YYYY");

        // This for loop sorts all desired data points into their respective day object arrays
        for(let i = 0; i < data.list.length; i++) {
            let itemDate = dayjs(data.list[i].dt_txt).format("MM/DD/YYYY");

            let day = "";

            if (itemDate === day0.date) {
                day = day0;
            } else if (itemDate === day1.date) {
                day = day1;
            } else if (itemDate === day2.date) {
                day = day2;
            } else if (itemDate === day3.date) {
                day = day3;
            } else if (itemDate === day4.date) {
                day = day4;
            } else if (itemDate === day5.date) {
                day = day5;
            }

            day.weather.push(data.list[i].weather[0].main);
            day.temp.push(data.list[i].main.temp);
            day.windSpeed.push(data.list[i].wind.speed);
            day.humidity.push(data.list[i].main.humidity);
            
        }

        // Populate cards places the data values into the HTML
        populateCards();
    });
