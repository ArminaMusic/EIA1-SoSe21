var countryAfrica = "Afrika";
var countrySouthamerica = "Südamerika";
var countryEurope = "Europa";
var countryNorthamerica = "Nordamerika";
var countryAsia = "Asien";
var countryAustralia = "Australien";
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
function calcGesamtemission1(zahl1, zahl2) {
    var ergebniss = zahl1 / zahl2 * 100;
    return ergebniss.toFixed(2);
}
//Berechnet die Veränderung 
function calcVerändert1(zahl1, zahl2) {
    var ergebniss = (zahl1 - zahl2) / zahl2 * 100;
    return ergebniss.toFixed(2);
}
//Berechnet die Differenz 
function calcVergleich1(zahl1, zahl2) {
    var ergebniss = zahl1 - zahl2;
    return ergebniss.toFixed(2);
}
console.log("Die Emission von " + countryAfrica + " ist: " + africa2018 + " kg CO2");
console.log("Die Emission von " + countrySouthamerica + " ist: " + southamerica2018 + " kg CO2");
console.log("Die Emission von " + countryEurope + " ist: " + europe2018 + " kg CO2");
console.log("Die Emission von " + countryNorthamerica + " ist: " + northamerica2018 + " kg CO2");
console.log("Die Emission von " + countryAsia + " ist: " + asia2018 + " kg CO2");
console.log("Die Emission von " + countryAustralia + " ist: " + australia2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryAfrica + " damit " + calcGesamtemission1(africa2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countrySouthamerica + " damit " + calcGesamtemission1(southamerica2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryEurope + " damit " + calcGesamtemission1(europe2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryNorthamerica + " damit " + calcGesamtemission1(northamerica2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryAsia + " damit " + calcGesamtemission1(asia2018, all) + " %");
console.log("Relativ zu Gesamtemission der Welt verursacht " + australia2018 + " damit " + calcGesamtemission1(australia2018, all) + " %");
console.log("F\u00FCr " + countryAfrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert1(africa2018, africa2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countrySouthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission " + calcVerändert1(southamerica2018, southamerica2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryEurope + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert1(europe2018, europe2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryNorthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert1(northamerica2018, northamerica2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryAsia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert1(asia2018, asia2008) + " % ver\u00E4ndert");
console.log("F\u00FCr " + countryAustralia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + calcVerändert1(australia2018, australia2008) + " % ver\u00E4ndert");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich1(africa2018, africa2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich1(southamerica2018, southamerica2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich1(europe2018, europe2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich1(northamerica2018, northamerica2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich1(asia2018, asia2008) + " kg CO2");
console.log("2018 im Vergleich zu 2008 sind das " + calcVergleich1(australia2018, australia2008) + " kg CO2");
//# sourceMappingURL=script.js.map