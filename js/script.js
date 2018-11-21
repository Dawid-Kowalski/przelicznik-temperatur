function convertTemperature() {

	const toCelsjus = document.getElementById("celsjus").checked;
	const toFahrenheit = document.getElementById("fahrenheit").checked;
	const temperature =  parseInt(document.getElementById("temperature").value);

	const resultCelsjusFromCelsjus = document.getElementById("c-celsjus-result");
	const resultFarhenheitFromCelsjus = document.getElementById("c-fahrenheit-result");
	const resultCelsjusFromFahrenheit = document.getElementById("f-celsjus-result");
	const resultFarhenheitFromFahrenheit = document.getElementById("f-fahrenheit-result");

	let temperatureResult = undefined;

	const celsjusPanel = document.getElementById("celsjus-panel");
	const fahrenheitPanel = document.getElementById("fahrenheit-panel");

	let anyData = true;

	celsjusPanel.hidden = true;
	fahrenheitPanel.hidden = true;

	if(toCelsjus == false && toFahrenheit == false) {
		alert("nie zaznaczono jednostki temperatury");
	}

	if(isNaN(temperature)) {
		alert("temperatura nie jest podana jako liczba");
		celsjusPanel.hidden = true;
		fahrenheitPanel.hidden = true;
	} else {
		if(toCelsjus == true) {
			fahrenheitPanel.hidden = false;
			temperatureResult = ((temperature - 32) / 1.8).toFixed(2);
			resultCelsjusFromFahrenheit.innerHTML = temperatureResult;
			resultFarhenheitFromFahrenheit.innerHTML = temperature;
		}
		if(toFahrenheit == true) {
			celsjusPanel.hidden = false;
			temperatureResult = ((temperature * 1.8) + 32).toFixed(2);
			resultCelsjusFromCelsjus.innerHTML = temperature;
			resultFarhenheitFromCelsjus.innerHTML = temperatureResult
		}
	}
}