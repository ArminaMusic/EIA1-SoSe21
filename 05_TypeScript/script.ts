var countryafrica: string = "Afrika";
var countrysouthamerica: string ="Südamerika";
var countryeurope: string = "Europa";
var countrynorthamerica: string = "Nordamerika";
var countryasia: string = "Asien";
var countryaustralia: string = "Australien";
var africa2008: number = 1028;
var africa2018: number = 1235.5;
var southamerica2008: number = 1132.6;
var southamerica2018: number = 1261.5;
var europe2008: number = 4965.7;
var europe2018: number = 4209.3;
var northamerica2008: number = 6600.4;
var northamerica2018: number = 6035.6;
var asia2008: number = 12954.7;
var asia2018: number = 16274.2;
var australia2008: number = 1993;
var australia2018: number = 2100.5;
var entire2018: number = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;

console.log("Die Emission von " + countryafrica + " ist:" + africa2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryafrica + " damit " + africa2018/entire2018*100 + "%");
console.log("Für " + countryafrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (africa2018-africa2008)/africa2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (africa2018-africa2008) + "kg CO2")
console.log("Die Emission von " + countrysouthamerica + " ist:" + southamerica2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countrysouthamerica + " damit " + southamerica2018/entire2018*100 + "%");
console.log("Für " + countrysouthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (southamerica2018-southamerica2008)/southamerica2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (southamerica2018-southamerica2008) + "kg CO2")
console.log("Die Emission von " + countryeurope + " ist:" + europe2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryeurope + " damit " + europe2018/entire2018*100 + "%");
console.log("Für " + countryeurope + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ (europe2018-europe2008)/europe2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (europe2018-europe2008) + "kg CO2")
console.log("Die Emission von " + countrynorthamerica + " ist:" + northamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countrynorthamerica + " damit " + northamerica2018/entire2018*100 + "%");
console.log("Für " + countrynorthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (northamerica2018-northamerica2008)/northamerica2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (northamerica2018-northamerica2008) + "kg CO2")
console.log("Die Emission von " + countryasia + " ist:" + asia2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryasia + " damit " + asia2018/entire2018*100 + "%");
console.log("Für " + countryasia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (asia2018-asia2008)/asia2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (asia2018-asia2008) + "kg CO2")
console.log("Die Emission von " + countryaustralia + " ist:" + australia2018 + " kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryaustralia + " damit " + australia2018/entire2018*100 + "%");
console.log("Für " + countryaustralia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (australia2018-australia2008)/australia2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (australia2018-australia2008) + "kg CO2")