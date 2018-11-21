
let temperatureCelsjus;
let text = "";

function convertTemperature() {

	const toCelsjus = document.getElementById("celsjus").checked;
	const toFahrenheit = document.getElementById("fahrenheit").checked;
	const temperature =  parseInt(document.getElementById("temperature").value);

	const resultCelsjusFromCelsjus = document.getElementById("c-celsjus-result");
	const resultFarhenheitFromCelsjus = document.getElementById("c-fahrenheit-result");
	const resultCelsjusFromFahrenheit = document.getElementById("f-celsjus-result");
	const resultFarhenheitFromFahrenheit = document.getElementById("f-fahrenheit-result");

	let temperatureResult;

	const celsjusPanel = document.getElementById("celsjus-panel");
	const fahrenheitPanel = document.getElementById("fahrenheit-panel");
	const textPanel = document.getElementById("text-panel");

	const textTemperature = document.getElementById("text-temperature");

	celsjusPanel.hidden = true;
	fahrenheitPanel.hidden = true;
	textPanel.hidden = true;

	if(toCelsjus === false && toFahrenheit === false) {
		alert("nie zaznaczono jednostki temperatury");
	}

	if(isNaN(temperature)) {
		alert("temperatura nie jest podana jako liczba");
		celsjusPanel.hidden = true;
		fahrenheitPanel.hidden = true;
		textPanel.hidden = true;
	} else {
		if(toCelsjus == true) {
			fahrenheitPanel.hidden = false;
			textPanel.hidden = false;
			temperatureResult = ((temperature - 32) / 1.8).toFixed(2);
			resultCelsjusFromFahrenheit.innerHTML = temperatureResult;
			resultFarhenheitFromFahrenheit.innerHTML = temperature;
			temperatureCelsjus = temperatureResult;
		}
		if(toFahrenheit == true) {
			celsjusPanel.hidden = false;
			textPanel.hidden = false;
			temperatureResult = ((temperature * 1.8) + 32).toFixed(2);
			resultCelsjusFromCelsjus.innerHTML = temperature;
			resultFarhenheitFromCelsjus.innerHTML = temperatureResult
			temperatureCelsjus = temperature;
		}
		
	checkTemperatureInfo();

	textTemperature.innerHTML = text;

	}
}

function checkTemperatureInfo() {
	console.log("weszło");
	if(temperatureCelsjus > 30) {
		text = "Polacy śpią bez żadnego nakrycia. Amerykanie zakładają swetry. Mieszkańcy Miami włączają ogrzewanie.";
	} else if (temperatureCelsjus > 20) {
		text = "Grecy zakładają swetry (jeśli je tylko mogą znaleźć).";
	} else if (temperatureCelsjus > 15) {
		text = "Jamajczycy włączają ogrzewanie (oczywiście, jeśli je mają).";
	} else if (temperatureCelsjus > 10) {
		text = "Amerykanie trzęsą się z zimna. Rosjanie na daczach sadzą ogórki.";
	} else if (temperatureCelsjus > 5) {
		text = "Włoskie samochody odmawiają posłuszeństwa. Norwedzy idą się... kąpać do jeziora";
	} else if (temperatureCelsjus > 0) {
		text = "W Ameryce zamarza woda. W Rosji woda gęstnieje. Rosjanie idą popływać.";
	} else if (temperatureCelsjus > -5) {
		text = "Francuskie samochody odmawiają posłuszeństwa.";
	} else if (temperatureCelsjus > -15) {
		text = "Kot upiera się, że będzie spać z tobą w łóżku. Norwedzy zakładają swetry. Politycy zaczynają rozmawiać o bezdomnych.";
	} else if (temperatureCelsjus > -17.5) {
		text = "W Oslo właściciele domów włączają ogrzewanie. Rosjanie ostatni raz w sezonie wyjeżdżają na dacze.";
	} else if (temperatureCelsjus > -20) {
		text = "Amerykańskie samochody nie zapalają";
	} else if (temperatureCelsjus > -25) {
		text = "Niemieckie samochody nie zapalają. Wyginęli Jamajczycy.";
	} else if (temperatureCelsjus > -30) {
		text = "Rosjanie zakładają podkoszulki. Potrzebujesz kabli rozruchowych, żeby samochód zaczął funkcjonować. Twój kot śpi w twojej piżamie.";
	} else if (temperatureCelsjus > -35) {
		text = "Zbyt zimno, żeby myśleć. Nie zapalają japońskie samochody.";
	} else if (temperatureCelsjus > -40) {
		text = "Politycy zaczynają coś robić z bezdomnymi. Możemy ze swojego oddechu budować domki igloo. Chcemy wyruszyć na południe. Planujesz przez dwa tygodnie nie wychodzić z gorącej kąpieli. Szwedzkie samochody odmawiają posłuszeństwa.";
	} else if (temperatureCelsjus > -45) {
		text = "W Europie nie funkcjonuje transport. Rosjanie jedzą lody na ulicy.";
	} else if (temperatureCelsjus > -50) {
		text = "Wyginęli Grecy. Władze rzeczywiście zaczynają robić coś dla bezdomnych.";
	} else if (temperatureCelsjus > -60) {
		text = "Powieki zamarzają w trakcie mrugania. Na Alasce zamykają lufcik podczas kąpieli. Za zimno, żeby myśleć. Potrzebujesz kabli rozruchowych, żeby kierowca zaczął funkcjonować. Rosjanie zamykają okno w łazience.";
	} else if (temperatureCelsjus > -75) {
		text = "Niedźwiedzie polarne ruszają na południe. Prawnicy wkładają ręce do swoich własnych kieszeni.";
	} else if (temperatureCelsjus > -80) {
		text = "Zamarzło piekło";
	} else if (temperatureCelsjus > -90) {
		text = "Fińskie służby specjalne ewakuują Świętego Mikołaja z Laponii. Rosjanie zakładają uszanki.";
	} else if (temperatureCelsjus > -100) {
		text = "Rosjanie nie zdejmują rękawic nawet przy nalewaniu wódki.";
	} else {
		text = "Zamarza spirytus etylowy. Rosjanie są wk*****wieni.";
	}
}