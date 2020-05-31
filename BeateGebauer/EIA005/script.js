"use strict";
//Africa
var AFRICA08 = 1028;
var AFRICA09 = 1041.9;
var AFRICA10 = 1072.1;
var AFRICA11 = 1073.7;
var AFRICA12 = 1107.1;
var AFRICA13 = 1134.4;
var AFRICA14 = 1167.4;
var AFRICA15 = 1174.5;
var AFRICA16 = 1192.1;
var AFRICA17 = 1207;
var AFRICA18 = 1235.5;
//South America
var SOUTHAMERICA08 = 1132.6;
var SOUTHAMERICA09 = 1093.1;
var SOUTHAMERICA10 = 1164.2;
var SOUTHAMERICA11 = 1215.5;
var SOUTHAMERICA12 = 1262;
var SOUTHAMERICA13 = 1308.9;
var SOUTHAMERICA14 = 1331.3;
var SOUTHAMERICA15 = 1321.7;
var SOUTHAMERICA16 = 1294.7;
var SOUTHAMERICA17 = 1279.2;
var SOUTHAMERICA18 = 1261.5;
//Europe
var EUROPE08 = 4965.70;
var EUROPE09 = 4616.4;
var EUROPE10 = 4705.8;
var EUROPE11 = 4615.2;
var EUROPE12 = 4541.5;
var EUROPE13 = 4436.9;
var EUROPE14 = 4202;
var EUROPE15 = 4191.6;
var EUROPE16 = 4247.3;
var EUROPE17 = 4278.7;
var EUROPE18 = 4209.3;
//North America
var NORTHAMERICA08 = 6600.4;
var NORTHAMERICA09 = 6139.9;
var NORTHAMERICA10 = 6375.8;
var NORTHAMERICA11 = 6262.8;
var NORTHAMERICA12 = 5998.9;
var NORTHAMERICA13 = 6167;
var NORTHAMERICA14 = 6268.9;
var NORTHAMERICA15 = 6048.7;
var NORTHAMERICA16 = 5938.3;
var NORTHAMERICA17 = 5920.5;
var NORTHAMERICA18 = 6035.6;
//Asia
var ASIA08 = 12954.7;
var ASIA09 = 13246.6;
var ASIA10 = 13986.8;
var ASIA11 = 14860.1;
var ASIA12 = 15308.8;
var ASIA13 = 15660.2;
var ASIA14 = 15787.7;
var ASIA15 = 15877;
var ASIA16 = 15984;
var ASIA17 = 16274.3;
var ASIA18 = 16274.1;
//Australia
var AUSTRALIA08 = 1993;
var AUSTRALIA09 = 1875.7;
var AUSTRALIA10 = 1939.1;
var AUSTRALIA11 = 2035.2;
var AUSTRALIA12 = 2063.2;
var AUSTRALIA13 = 2014.7;
var AUSTRALIA14 = 2027.6;
var AUSTRALIA15 = 1986.8;
var AUSTRALIA16 = 1997.4;
var AUSTRALIA17 = 2001.3;
var AUSTRALIA18 = 2100.5;
//Text
//1st part
var AFRICA = "Die Emission von Afrika ist: ";
var SOUTHAMERICA = "Die Emission von Südamerika ist: ";
var EUROPE = "Die Emission von Europa ist: ";
var NORTHAMERICA = "Die Emission von Nordamerika ist: ";
var ASIA = "Die Emission von Asien ist: ";
var AUSTRALIA = "Die Emission von Australien ist: ";
//2nd part
var relAFRICA = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var relSOUTHAMERICA = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var relEUROPE = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var relNORTHAMERICA = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ";
var relASIA = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var relAUSTRALIA = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
//3rd part
var CompAFRICA = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var CompSOUTHAMERICA = "Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var CompEUROPE = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var CompNORTHAMERICA = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var CompASIA = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var CompAUSTRALIA = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
//endings
var kgEnding = " kg CO2.";
var pEnding = " % verändert.";
var CompEnding = "2018 im Vergleich zu 2008 sind das ";
//Total World
var world2018 = (AFRICA18 + SOUTHAMERICA18 + EUROPE18 + NORTHAMERICA18 + ASIA18 + AUSTRALIA18);
//AFRICA text
console.log(AFRICA + AFRICA18 + kgEnding);
console.log(relAFRICA + ((AFRICA18 / world2018) * 100) + " %.");
console.log(CompAFRICA + (((AFRICA18 - AFRICA08) / AFRICA18) * 100) + pEnding);
console.log(CompEnding + (AFRICA18 - AFRICA08) + kgEnding);
//SOUTH AMERICA text
console.log(SOUTHAMERICA + SOUTHAMERICA18 + kgEnding);
console.log(relSOUTHAMERICA + ((SOUTHAMERICA18 / world2018) * 100) + " %");
console.log(CompSOUTHAMERICA + (((SOUTHAMERICA18 - SOUTHAMERICA08) / SOUTHAMERICA18) * 100) + pEnding);
console.log(CompEnding + (SOUTHAMERICA18 - SOUTHAMERICA08) + kgEnding);
//EUROPE text
console.log(EUROPE + EUROPE18 + kgEnding);
console.log(relEUROPE + ((EUROPE18 / world2018) * 100) + " %");
console.log(CompEUROPE + (((EUROPE18 - EUROPE08) / EUROPE18) * 100) + pEnding);
console.log(CompEnding + (EUROPE18 - EUROPE08) + kgEnding);
//NORTHAMERICA text
console.log(NORTHAMERICA + NORTHAMERICA18 + kgEnding);
console.log(relNORTHAMERICA + ((NORTHAMERICA18 / world2018) * 100) + " %");
console.log(CompNORTHAMERICA + (((NORTHAMERICA18 - NORTHAMERICA08) / NORTHAMERICA18) * 100) + pEnding);
console.log(CompEnding + (NORTHAMERICA18 - NORTHAMERICA08) + kgEnding);
//ASIA text
console.log(ASIA + ASIA18 + kgEnding);
console.log(relASIA + ((ASIA18 / world2018) * 100) + " %");
console.log(CompASIA + (((ASIA18 - ASIA08) / ASIA18) * 100) + pEnding);
console.log(CompEnding + (ASIA18 - ASIA08) + kgEnding);
//AUSTRALIA text
console.log(AUSTRALIA + AUSTRALIA18 + kgEnding);
console.log(relAUSTRALIA + ((AUSTRALIA18 / world2018) * 100) + " %");
console.log(CompAUSTRALIA + (((AUSTRALIA18 - AUSTRALIA08) / AUSTRALIA18) * 100) + pEnding);
console.log(CompEnding + (AUSTRALIA18 - AUSTRALIA08) + kgEnding);
//# sourceMappingURL=script.js.map