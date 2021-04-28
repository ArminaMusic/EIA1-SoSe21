var countryAfrica: string = "Afrika";
var countrySouthamerica: string ="Südamerika";
var countryEurope: string = "Europa";
var countryNorthamerica: string = "Nordamerika";
var countryAsia: string = "Asien";
var countryAustralia: string = "Australien";
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
var all: number = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;

//Berechnet die Relativen Gesamtemissionen der Welt
function calcGesamtemission1(zahl1: number, zahl2:number) {
    const ergebniss: number = zahl1/zahl2*100
    return ergebniss.toFixed(2)
}

//Berechnet die Veränderung 
function calcVerändert1(zahl1: number, zahl2:number) {
    const ergebniss: number = (zahl1-zahl2)/zahl2*100
    return ergebniss.toFixed(2)
}

//Berechnet die Differenz 
function calcVergleich1(zahl1: number, zahl2:number) {
    const ergebniss: number = zahl1-zahl2
    return ergebniss.toFixed(2)
}

console.log(`Die Emission von ${countryAfrica} ist: ${africa2018} kg CO2`);
console.log(`Die Emission von ${countrySouthamerica} ist: ${southamerica2018} kg CO2`);
console.log(`Die Emission von ${countryEurope} ist: ${europe2018} kg CO2`);
console.log(`Die Emission von ${countryNorthamerica} ist: ${northamerica2018} kg CO2`);
console.log(`Die Emission von ${countryAsia} ist: ${asia2018} kg CO2`);
console.log(`Die Emission von ${countryAustralia} ist: ${australia2018} kg CO2`);

console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryAfrica} damit ${calcGesamtemission1(africa2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countrySouthamerica} damit ${calcGesamtemission1(southamerica2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryEurope} damit ${calcGesamtemission1(europe2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryNorthamerica} damit ${calcGesamtemission1(northamerica2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryAsia} damit ${calcGesamtemission1(asia2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${australia2018} damit ${calcGesamtemission1(australia2018, all)} %`);

console.log(`Für ${countryAfrica} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert1(africa2018, africa2008)} % verändert`);
console.log(`Für ${countrySouthamerica} hat sich 2018 im Vergleich zu 2008 die Emission ${calcVerändert1(southamerica2018, southamerica2008)} % verändert`);
console.log(`Für ${countryEurope} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert1(europe2018, europe2008)} % verändert`);
console.log(`Für ${countryNorthamerica} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert1(northamerica2018, northamerica2008)} % verändert`);
console.log(`Für ${countryAsia} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert1(asia2018, asia2008)} % verändert`);
console.log(`Für ${countryAustralia} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert1(australia2018, australia2008)} % verändert`);

console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich1(africa2018, africa2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich1(southamerica2018, southamerica2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich1(europe2018, europe2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich1(northamerica2018, northamerica2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich1(asia2018, asia2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich1(australia2018, australia2008)} kg CO2`);