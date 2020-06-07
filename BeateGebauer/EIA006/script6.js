"use strict";
//Africa
var AFRICA08 = 1028;
var AFRICA18 = 1235.5;
//South America
var SOUTHAMERICA08 = 1132.6;
var SOUTHAMERICA18 = 1261.5;
//Europe
var EUROPE08 = 4965.70;
var EUROPE18 = 4209.3;
//North America
var NORTHAMERICA08 = 6600.4;
var NORTHAMERICA18 = 6035.6;
//Asia
var ASIA08 = 12954.7;
var ASIA18 = 16274.1;
//Australia
var AUSTRALIA08 = 1993;
var AUSTRALIA18 = 2100.5;
//Total World
var world2018 = (AFRICA18 + SOUTHAMERICA18 + EUROPE18 + NORTHAMERICA18 + ASIA18 + AUSTRALIA18);
//AFRICA
var RAFRICA = (AFRICA18 / world2018) * 100;
var CAFRICA = ((AFRICA18 - AFRICA08) / AFRICA18) * 100;
var GAFRICA = (AFRICA18 - AFRICA08);
//SOUTH AMERICA 
var RSOUTAMERICA = (SOUTHAMERICA18 / world2018) * 100;
var CSOUTHAMERICA = ((SOUTHAMERICA18 - SOUTHAMERICA08) / SOUTHAMERICA18) * 100;
var GSOUTHAMERICA = (SOUTHAMERICA18 - SOUTHAMERICA08);
//EUROPE 
var REUROPE = (EUROPE18 / world2018) * 100;
var CEUROPE = ((EUROPE18 - EUROPE08) / EUROPE18) * 100;
var GEUROPE = (EUROPE18 - EUROPE08);
//NORTHAMERICA 
var RNORTHAMERICA = (NORTHAMERICA18 / world2018) * 100;
var CNORTHAMERICA = ((NORTHAMERICA18 - NORTHAMERICA08) / NORTHAMERICA18) * 100;
var GNORTHAMERICA = (NORTHAMERICA18 - NORTHAMERICA08);
//ASIA
var RASIA = (ASIA18 / world2018) * 100;
var CASIA = ((ASIA18 - ASIA08) / ASIA18) * 100;
var GASIA = (ASIA18 - ASIA08);
//AUSTRALIA 
var RAUSTRALIA = (AUSTRALIA18 / world2018) * 100;
var CAUSTRALIA = ((AUSTRALIA18 - AUSTRALIA08) / AUSTRALIA18) * 100;
var GAUSTRALIA = (AUSTRALIA18 - AUSTRALIA08);
//Funktionen
//Africa
function Africa() {
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector("chart").setAttribute("style", "height:" + RAFRICA + "px");
    document.querySelector("#EMISSION").innerHTML = AFRICA18.toFixed(1) + "kg CO2";
    document.querySelector("#EText").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#RELATIVE").innerHTML = RAFRICA.toFixed(1) + " %";
    document.querySelector("#RText").innerHTML = "Relative to total world's emission";
    document.querySelector("#COMPARISON").innerHTML = CAFRICA.toFixed(1) + " %";
    document.querySelector("#CText").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#GROWTH").innerHTML = GAFRICA.toFixed(1) + "kg CO2";
    document.querySelector("#GText").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", Africa);
});
//South America
function SouthAmerica() {
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector("chart").setAttribute("style", "height:" + RSOUTAMERICA + "px");
    document.querySelector("#EMISSION").innerHTML = SOUTHAMERICA18.toFixed(1) + "kg CO2";
    document.querySelector("#EText").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#RELATIVE").innerHTML = RSOUTAMERICA.toFixed(1) + " %";
    document.querySelector("#RText").innerHTML = "Relative to total world's emission";
    document.querySelector("#COMPARISON").innerHTML = CSOUTHAMERICA.toFixed(1) + " %";
    document.querySelector("#CText").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#GROWTH").innerHTML = GSOUTHAMERICA.toFixed(1) + "kg CO2";
    document.querySelector("#GText").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", SouthAmerica);
});
//Europe
function Europe() {
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector("chart").setAttribute("style", "height:" + REUROPE + "px");
    document.querySelector("#EMISSION").innerHTML = EUROPE18.toFixed(1) + "kg CO2";
    document.querySelector("#EText").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#RELATIVE").innerHTML = REUROPE.toFixed(1) + " %";
    document.querySelector("#RText").innerHTML = "Relative to total world's emission";
    document.querySelector("#COMPARISON").innerHTML = CEUROPE.toFixed(1) + " %";
    document.querySelector("#CText").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#GROWTH").innerHTML = GEUROPE.toFixed(1) + "kg CO2";
    document.querySelector("#GText").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", Europe);
});
//North America
function NorthAmerica() {
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector("chart").setAttribute("style", "height:" + RNORTHAMERICA + "px");
    document.querySelector("#EMISSION").innerHTML = NORTHAMERICA18.toFixed(1) + "kg CO2";
    document.querySelector("#EText").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#RELATIVE").innerHTML = RNORTHAMERICA.toFixed(1) + " %";
    document.querySelector("#RText").innerHTML = "Relative to total world's emission";
    document.querySelector("#COMPARISON").innerHTML = CNORTHAMERICA.toFixed(1) + " %";
    document.querySelector("#CText").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#GROWTH").innerHTML = GNORTHAMERICA.toFixed(1) + "kg CO2";
    document.querySelector("#GText").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", NorthAmerica);
});
//Asia
function Asia() {
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector("chart").setAttribute("style", "height:" + RASIA + "px");
    document.querySelector("#EMISSION").innerHTML = ASIA18.toFixed(1) + "kg CO2";
    document.querySelector("#EText").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#RELATIVE").innerHTML = RASIA.toFixed(1) + " %";
    document.querySelector("#RText").innerHTML = "Relative to total world's emission";
    document.querySelector("#COMPARISON").innerHTML = CASIA.toFixed(1) + " %";
    document.querySelector("#CText").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#GROWTH").innerHTML = GASIA.toFixed(1) + "kg CO2";
    document.querySelector("#GText").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".asia")?.addEventListener("click", Asia);
});
//Australia
function Australia() {
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector("chart").setAttribute("style", "height:" + RAUSTRALIA + "px");
    document.querySelector("#EMISSION").innerHTML = AUSTRALIA18.toFixed(1) + "kg CO2";
    document.querySelector("#EText").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#RELATIVE").innerHTML = RAUSTRALIA.toFixed(1) + " %";
    document.querySelector("#RText").innerHTML = "Relative to total world's emission";
    document.querySelector("#COMPARISON").innerHTML = CAUSTRALIA.toFixed(1) + " %";
    document.querySelector("#CText").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#GROWTH").innerHTML = GAUSTRALIA.toFixed(1) + "kg CO2";
    document.querySelector("#GText").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", Australia);
});
//# sourceMappingURL=script6.js.map