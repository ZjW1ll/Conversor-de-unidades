const inputTemperature = document.getElementById("temp-input");
const outcomeTemperature = document.getElementById("temp-outcome");
const convertDropdown = document.getElementById("convert-dropdown");
const outcomeDropdown = document.getElementById("outcome-dropdown");
const inputMeasureSwitch = document.getElementById("measure-switch-input");
const outputMeasureSwitch = document.getElementById("measure-switch-output");
const inputMeasureDropdown = document.getElementById("measure-dropdown-input");
const outputMeasureDropdown = document.getElementById("measure-dropdown-output");
const inputDistance = document.getElementById("distance-input");
const outcomeDistance = document.getElementById("distance-outcome");

//TEMPERATURA

function temperatureConvert() {
    if (convertDropdown.value !== outcomeDropdown.value) {
        switch (outcomeDropdown.value) {
            case "Celsius": //Converter para Celsius
                if(convertDropdown.value == "Fahrenheit") {
                    outcomeTemperature.value = (inputTemperature.value - 32) * (5 / 9);
                } else if (convertDropdown.value == "Kelvin") {
                    outcomeTemperature.value = inputTemperature.value - 273.15;
                }
                break;
            case "Fahrenheit": //Converter para Fahrenheit
                if(convertDropdown.value == "Celsius") {
                    outcomeTemperature.value = (inputTemperature.value * 1.8) + 32;
                } else if (convertDropdown.value == "Kelvin") {
                    outcomeTemperature.value = (inputTemperature.value - 273.15) * (9 / 5) + 32;
                }
                break;
            case "Kelvin": //Converter para Kelvin
                if(convertDropdown.value == "Celsius") {
                    outcomeTemperature.value = Number(inputTemperature.value) + 273.15;
                } else if (convertDropdown.value == "Fahrenheit") {
                    outcomeTemperature.value = (inputTemperature.value - 32) * (5 / 9) + 273.15;
                }
                break;
        }

    } else {
        outcomeTemperature.value = inputTemperature.value
    }
}

inputTemperature.addEventListener("input", temperatureConvert);
convertDropdown.addEventListener("change", temperatureConvert);
outcomeDropdown.addEventListener("change", temperatureConvert);

//DISTANCIA

const metricUnit = ["Milimeter", "Centimeter", "Meter", "Kilometer"];
const metricText = ["Milímetro (mm)", "Centímetro (cm)", "Metro (m)", "Quilômetro (km)"];
const imperialUnit = ["Inch", "Feet", "Yard", "Mile"];
const imperialText = ["Polegada (in)", "Pé (ft)", "Jarda (yd)", "Milha (mi)"];

function measureSwitch(select, units, label) {
    select.innerHTML = "";
    
    units.forEach((unit, text) => {
        const option = document.createElement("option")
        option.value = unit
        option.textContent = label[text];
        select.appendChild(option);
    })
    
}

inputMeasureSwitch.addEventListener("change", () => {
    if (inputMeasureSwitch.checked) {
        measureSwitch(inputMeasureDropdown, imperialUnit, imperialText)
    } else {
        measureSwitch(inputMeasureDropdown, metricUnit, metricText)
    }

    measureConvert();
})

outputMeasureSwitch.addEventListener("change", () => {
    if (outputMeasureSwitch.checked) {
        measureSwitch(outputMeasureDropdown, imperialUnit, imperialText)
    } else {
        measureSwitch(outputMeasureDropdown, metricUnit, metricText)
    }

    measureConvert()
})

let inMeter;

function toMeter() {
    switch (inputMeasureDropdown.value) {
    case "Milimeter":
        inMeter = inputDistance.value / 1000;
        break;
    case "Centimeter":
        inMeter = inputDistance.value / 100;
        break;
    case "Meter":
        inMeter = inputDistance.value;
        break;
    case "Kilometer":
        inMeter = inputDistance.value * 1000;
        break;
    case "Inch":
        inMeter = inputDistance.value * 0.0254;
        break;
    case "Feet":
        inMeter = inputDistance.value * 0.3048;
        break;
    case "Yard":
        inMeter = inputDistance.value * 0.9144;
        break;
    case "Mile":
        inMeter = inputDistance.value * 1609.34;
        break;
    }
}

function measureConvert() {
    toMeter();

    switch (outputMeasureDropdown.value) {
    case "Milimeter":
        outcomeDistance.value = inMeter * 1000;
        break;
    case "Centimeter":
        outcomeDistance.value = inMeter * 100;
        break;
    case "Meter":
        outcomeDistance.value = inMeter;
        break;
    case "Kilometer":
        outcomeDistance.value = inMeter / 1000;
        break;
    case "Inch":
        outcomeDistance.value = inMeter / 0.0254;
        break;
    case "Feet":
        outcomeDistance.value = inMeter / 0.3048;
        break;
    case "Yard":
        outcomeDistance.value = inMeter / 0.9144;
        break;
    case "Mile":
        outcomeDistance.value = inMeter / 1609.34;
        break;
}
}

inputDistance.addEventListener("input", measureConvert);
inputMeasureDropdown.addEventListener("change", measureConvert);
outputMeasureDropdown.addEventListener("change", measureConvert);