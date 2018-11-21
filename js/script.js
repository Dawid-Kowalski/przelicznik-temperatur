function convertTemperature() {

	const isCelsjus = document.getElementById("celsjus").checked;
	const isFahrenheit = document.getElementById("fahrenheit").checked;
	const temperature =  document.getElementById("temperature").value;

	let temperatureResult = undefined;

	if(isCelsjus == true) {
		temperatureResult = ((temperature - 32) / 1.8).toFixed(2);
		alert("temperatura w celsjuszach: " + temperatureResult + "\n" + " temperatura w fahrenheitah: " + temperature);
	}

	if(isFahrenheit == true) {
		temperatureResult = ((temperature * 1.8) + 32).toFixed(2);
		alert("temperatura w celsjuszach: " + temperature + "\n" + " temperatura w fahrenheitah: " + temperatureResult);
	}
		
}