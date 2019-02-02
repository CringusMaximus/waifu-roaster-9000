//rules for adding cards
//less well known characters are rarer.
//alternate styles make card rarer based on amount of change.
//each series can only have 1 legendary card.
//for every 3 common cards, there must be one uncommon card.
//for every 4 uncommon cards, there must be a rare card.
//for every 4 rare cards, there must be one super rare card.
//for every 81 super rare cards, there must be one legendary card.

//max 72
exports.generateCommon = function(){
	var n = Math.floor(Math.random() * Math.floor(22));//number is final case + 1
    var numstr = n.toString(10);
    var location;
	switch (numstr)
	{
		case "0":
		location = "ddlcMonika";
		break;
		case "1":
		location = "ddlcNatsuki";
		break;
		case "2":
		location = "ddlcSayori";
		break;
		case "3":
		location = "ddlcYuri";
		break;
		case "4":
		location = "underKRound";
		break;
		case "5":
		location = "underSans";
		break;
		case "6":
		location = "touhouHina";
		break;
		case "7":
		location = "touhouCirno";
		break;
		case "8":
		location = "touhouMarisa";
		break;
		case "9":
		location = "touhouReimu";
		break;
		case "10":
		location = "touhouSakuya";
		break;
		case "11":
		location = "touhouReisen";
		break;
		case "12":
		location = "touhouAya";
		break;
		case "13":
		location = "nepBlanc";
		break;
		case "14":
		location = "nepNoire";
		break;
		case "15":
		location = "nepNeptune";
		break;
		case "16":
		location = "nepNepgear";
		break;
		case "17":
		location = "nepVert";
		break;
		case "18":
		location = "nepIffy";
		break;
		case "19":
		location = "nepCompa";
		break;
		case "20":
		location = "feCorrin";
		break;
		case "21":
		location = "feAzura";
		break;
	}
	return location;
}
//min 7 max 48
exports.generateUnCommon = function(){
	var n = Math.floor(Math.random() * Math.floor(29));//number is final case + 1
    var numstr = n.toString(10);
    var location;
	switch (numstr)
	{
		case "0":
		location = "bravelyAgnes";
		break;
		case "1":
		location = "bravelyEdea";
		break;
		case "2":
		location = "mgqGnome";
		break;
		case "3":
		location = "mgqSylph";
		break;
		case "4":
		location = "touhouTanCirno";
		break;
		case "5":
		location = "touhouMomiji";
		break;
		case "6":
		location = "touhouOrin";
		break;
		case "7":
		location = "touhouRumia";
		break;
		case "8":
		location = "bakemonShinobu";
		break;
		case "9":
		location = "mgqChrome";
		break;
		case "10":
		location = "nepRed";
		break;
		case "11":
		location = "nepChika";
		break;
		case "12":
		location = "nepCave";
		break;
		case "13":
		location = "nepBsha";
		break;
		case "14":
		location = "nepCsha";
		break;
		case "15":
		location = "nepSsha";
		break;
		case "16":
		location = "nepKsha";
		break;
		case "17":
		location = "nepCyber";
		break;
		case "18":
		location = "nepBroccoli";
		break;
		case "19":
		location = "nepPea";
		break;
		case "20":
		location = "nepPlutia";
		break;
		case "21":
		location = "nepRomRam";
		break;
		case "22":
		location = "nepUni";
		break;
		case "23":
		location = "nepMina";
		break;
		case "24":
		location = "feMarth";
		break;
		case "25":
		location = "feTikiSD";
		break;
		case "26":
		location = "feMirvana";
		break;
		case "27":
		location = "feLute";
		break;
		case "28":
		location = "feCaeda";
		break;
	}
	return location;
}
//min 5 max 40
exports.generateRare = function(){
	var n = Math.floor(Math.random() * Math.floor(11));//number is final case + 1
    var numstr = n.toString(10);
    var location;
	switch (numstr)
	{
		case "0":
		location = "ddlcTrapsuki";
		break;
		case "1":
		location = "touhouDankRumia";
		break;
		case "2":
		location = "touhouWan";
		break;
		case "3":
		location = "touhouAdventCirno";
		break;
		case "5":
		location = "nepRei";
		break;
		case "6":
		location = "nepHistoire";
		break;
		case "7":
		location = "nepTekken";
		break;
		case "8":
		location = "nepChoire";
		break;
		case "9":
		location = "feNino";
		break;
		case "4":
		location = "feTikiRMS";
		break;
		case "10":
		location = "feLyn";
		break;
	}
	return location;
}
//min 3 max 162
exports.generateSuperRare = function(){
	var n = Math.floor(Math.random() * Math.floor(10));//number is final case + 1
    var numstr = n.toString(10);
    var location;
	switch (numstr)
	{
		case "0":
		location = "touhouWeedCirno";
		break;
		case "1":
		location = "touhouJohnny";
		break;
		case "2":
		location = "touhouRoastAya";
		break;
		case "3":
		location = "touhouRemberence";
		break;
		case "4":
		location = "touhouBillCosby";
		break;
		case "5":
		location = "touhouCanada";
		break;
		case "6":
		location = "touhouTrueYuuka";
		break;
		case "7":
		location = "touhouSpellcard";
		break;
		case "8":
		location = "feWincest";
		break;
		case "9":
		location = "feAssassinNino";
		break;
	}
	return location;
}
//min 1
exports.generateLegendary = function(){
	var n = Math.floor(Math.random() * Math.floor(2));//number is final case + 1
    var numstr = n.toString(10);
    var location;
	switch (numstr)
	{
		case "0":
		location = "ddlcVietcongika";
		break;
		case "1":
		location = "imminentDefeat";
		break;
		
	}
	return location;
}

exports.generateAny = function(userID,mod){
	var n = Math.floor(Math.random() * Math.floor(8192)) ;//gotta make legendaries as rare as shinies
    var numstr = n.toString(10);
    var location;
    if(numstr == "0")
	{
		location = exports.generateLegendary(userID.toString(10),mod);
	}
	else if(n <= 82)
	{
		location = exports.generateSuperRare(userID.toString(10),mod);
	}
	else if(n <= 410)
	{
		location = exports.generateRare(userID.toString(10),mod);
	}
	else if(n <= 2048)
	{
		location = exports.generateUnCommon(userID.toString(10),mod);
	}
	else
	{
		location = exports.generateCommon(userID.toString(10),mod);
	}
	return location;
}