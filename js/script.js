function convertTemperature() {

	const toCelsjus = document.getElementById("celsjus").checked;
	const toFahrenheit = document.getElementById("fahrenheit").checked;
	const temperature =  document.getElementById("temperature").value;

	const resultCelsjusFromCelsjus = document.getElementById("c-celsjus-result");
	const resultFarhenheitFromCelsjus = document.getElementById("c-fahrenheit-result");
	const resultCelsjusFromFahrenheit = document.getElementById("f-celsjus-result");
	const resultFarhenheitFromFahrenheit = document.getElementById("f-fahrenheit-result");


	let temperatureResult = undefined;

	if(toCelsjus == true) {
		temperatureResult = ((temperature - 32) / 1.8).toFixed(2);
		resultCelsjusFromFahrenheit.innerHTML = temperatureResult;
		resultFarhenheitFromFahrenheit.innerHTML = temperature;
	}

	if(toFahrenheit == true) {
		temperatureResult = ((temperature * 1.8) + 32).toFixed(2);
		resultCelsjusFromCelsjus.innerHTML = temperature;
		resultFarhenheitFromCelsjus.innerHTML = temperatureResult
	}
		
}