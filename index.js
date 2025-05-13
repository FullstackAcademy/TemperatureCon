function convertToCelsius(fahrenheit) {
  // Instructions: Convert the given temperature in Fahrenheit to Celsius.
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  //Step 1: Turn Farenheit to Celsius
  let celsius = ((fahrenheit - 32) * 5) / 9;

  // Step 2: Check the chart and pick a word
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

// Prompt the user for input
let fahrenheit = parseFloat(prompt("Enter a temperature in Fahrenheit: "));

// Convert and describe the temperature
let celsius = convertToCelsius(fahrenheit);
let description = describeTemperature(fahrenheit);

// Alert the result
alert(
  `The temperature in Celsius is ${celsius.toFixed(
    2
  )}°C, which feels ${description}.`
);
