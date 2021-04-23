var countryafrica = "Afrika";
var countrysouthamerica = "Südamerika";
var countryeurope = "Europa";
var countrynorthamerica = "Nordamerika";
var countryasia = "Asien";
var countryaustralia = "Australien";
var africa2008 = 1028;
var africa2018 = 1235.5;
var southamerica2008 = 1132.6;
var southamerica2018 = 1261.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var northamerica2008 = 6600.4;
var northamerica2018 = 6035.6;
var asia2008 = 12954.7;
var asia2018 = 16274.2;
var australia2008 = 1993;
var australia2018 = 2100.5;
var all = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;
//Berechnet die Relativen Gesamtemissionen der Welt
function calcGesamtemission(zahl1, zahl2) {
    var ergebniss = zahl1 / zahl2 * 100;
    return ergebniss.toFixed(2);
}
//Berechnet die Veränderung 
function calcVerändert(zahl1, zahl2) {
    var ergebniss = (zahl1 - zahl2) / zahl2 * 100;
    return ergebniss.toFixed(2);
}
//Berechnet die Differenz 
function calcVergleich(zahl1, zahl2) {
    var ergebniss = zahl1 - zahl2;
    return ergebniss.toFixed(2);
}
console.log("Die Emission von " + countryafrica + " ist: " + africa2018 + " kg CO2");
console.log("Die Emission von " + countrysouthamerica + " ist: " + southamerica2018 + " kg CO2");
console.log("Die Emission von " + countryeurope + " ist: " + europe2018 + " kg CO2");
console.log("Die Emission von " + countrynorthamerica + " ist: " + northamerica2018 + " kg CO2");
console.log("Die Emission von " + countryasia + " ist: " + asia2018 + " kg CO2");
console.log("Die Emission von " + countryaustralia + " ist: " + australia2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryafrica + " damit " + calcGesamtemission(africa2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countrysouthamerica + " damit " + calcGesamtemission(southamerica2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryeurope + " damit " + calcGesamtemission(europe2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countrynorthamerica + " damit " + calcGesamtemission(northamerica2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryasia + " damit " + calcGesamtemission(asia2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + australia2018 + " damit " + calcGesamtemission(australia2018, all) + " %");
console.log("F\u00FCr " + countryafrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert(africa2018, africa2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countrysouthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission " + calcVerändert(southamerica2018, southamerica2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryeurope + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert(europe2018, europe2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countrynorthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert(northamerica2018, northamerica2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryasia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert(asia2018, asia2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryaustralia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert(australia2018, australia2008) + " % ver\u00E4ndert");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich(africa2018, africa2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich(southamerica2018, southamerica2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich(europe2018, europe2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich(northamerica2018, northamerica2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich(asia2018, asia2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich(australia2018, australia2008) + " kg CO2");
//# sourceMappingURL=script.js.map