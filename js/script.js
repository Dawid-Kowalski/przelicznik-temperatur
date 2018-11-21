function giveTemperature() {

	const isCelsjus = document.getElementById("celsjus").checked;
	const isFahrenheit = document.getElementById("fahrenheit").checked;
	const temperature =  document.getElementById("temperature").value;

	alert("w celsjuszach: " + isCelsjus + "\n" + "w fahrenheitah: " + isFahrenheit + "\n" + "temperatura: " + temperature);
}