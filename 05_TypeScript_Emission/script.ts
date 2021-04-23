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
var all: number = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;

//Berechnet die Relativen Gesamtemissionen der Welt
function calcGesamtemission(zahl1: number, zahl2:number) {
    const ergebniss: number = zahl1/zahl2*100
    return ergebniss.toFixed(2)
}

//Berechnet die Veränderung 
function calcVerändert(zahl1: number, zahl2:number) {
    const ergebniss: number = (zahl1-zahl2)/zahl2*100
    return ergebniss.toFixed(2)
}

//Berechnet die Differenz 
function calcVergleich(zahl1: number, zahl2:number) {
    const ergebniss: number = zahl1-zahl2
    return ergebniss.toFixed(2)
}

console.log(`Die Emission von ${countryafrica} ist: ${africa2018} kg CO2`);
console.log(`Die Emission von ${countrysouthamerica} ist: ${southamerica2018} kg CO2`);
console.log(`Die Emission von ${countryeurope} ist: ${europe2018} kg CO2`);
console.log(`Die Emission von ${countrynorthamerica} ist: ${northamerica2018} kg CO2`);
console.log(`Die Emission von ${countryasia} ist: ${asia2018} kg CO2`);
console.log(`Die Emission von ${countryaustralia} ist: ${australia2018} kg CO2`);

console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryafrica} damit ${calcGesamtemission(africa2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countrysouthamerica} damit ${calcGesamtemission(southamerica2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryeurope} damit ${calcGesamtemission(europe2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countrynorthamerica} damit ${calcGesamtemission(northamerica2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${countryasia} damit ${calcGesamtemission(asia2018, all)} %`);
console.log(`Relativ zu Gesamtemission der Welt verursacht ${australia2018} damit ${calcGesamtemission(australia2018, all)} %`);

console.log(`Für ${countryafrica} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert(africa2018, africa2008)} % verändert`);
console.log(`Für ${countrysouthamerica} hat sich 2018 im Vergleich zu 2008 die Emission ${calcVerändert(southamerica2018, southamerica2008)} % verändert`);
console.log(`Für ${countryeurope} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert(europe2018, europe2008)} % verändert`);
console.log(`Für ${countrynorthamerica} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert(northamerica2018, northamerica2008)} % verändert`);
console.log(`Für ${countryasia} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert(asia2018, asia2008)} % verändert`);
console.log(`Für ${countryaustralia} hat sich 2018 im Vergleich zu 2008 die Emission um ${calcVerändert(australia2018, australia2008)} % verändert`);

console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich(africa2018, africa2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich(southamerica2018, southamerica2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich(europe2018, europe2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich(northamerica2018, northamerica2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich(asia2018, asia2008)} kg CO2`);
console.log(`2018 im Vergleich zu 2008 sind das ${calcVergleich(australia2018, australia2008)} kg CO2`);