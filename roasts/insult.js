exports.insult = function(userID, mod){

	var n = ((Number(userID) % 500) + Number(mod)) % 43;//final number is last case + 1
	var numstr = n.toString(10);
	var roast
	
	switch(numstr){
		case "0":
		roast = "your mum gay";
		break;
		case "1":
		roast = "you have a face only a mother could make love to.";
		break;
		case "3":
		roast = "I bet you lost your virginity to a power drill.";
		break;
		case "4":
		roast = "<@" + userID + ">? more like, gay homophobe.";
		break;
		case "5":
		roast = "I won't even grace you with an insult.";
		break;
		case "6":
		roast = "go commit die.";
		break;
		case "7":
		roast = "hey, I found this new muppets game, you should try it! it's called Kermit sewer slide.";
		break;
		case "8":
		roast = "boi you stupid.";
		break;
		case "9":
		roast = "I bet you still think ugandan knuckes is funny.";
		break;
		case "10":
		roast = "you still read rage comics, don't you?";
		break;
		case "11":
		roast = "when will you learn? that your actions have conciquences!";
		break;
		case "12":
		roast = "not gonna lie, I wanna fuck your boyfriend.";
		break;
		case "13":
		roast = "do your parents know you're a furry?";
		break;
		case "14":
		roast = "wise man say: <@" + userID + "> is the big gay.";
		break;
		case "15":
		roast = "I bet you fap to these insults.";
		break;
		case "16":
		roast = "have you told your gf you're only dating her so you can bang her child?";
		break;
		case "17":
		roast = "geez, do you suck your father off with that mouth?";
		break;
		case "18":
		roast = "legend has it that if you live to 30 years of age without losing your virginity, you become a wizard. you'd be a perfect test subject for that if it weren't for that unfortunate incident with the dolphin.";
		break;
		case "19":
		roast = "suck my dick, then i'll destroy your self esteem.";
		break;
		case "20":
		roast = "hey, look who it is! I haven't seen you since you got your ass handed to you by a duck!";
		break;
		case "21":
		roast = "<@"+userID+">, more like Bore Ragnarok.";
		break;
		case "22":
		roast = "I wouldn't touch you with a fifty nine and a half foot pole.";
		break;
		case "23":
		roast = "I bet you're onto tsunderes.";
		break;
		case "24":
		roast = "even bill cosby dosn't want a peice of your ass.";
		break;
		case "25":
		roast = "you freaking communist nazi anarcist";
		break;
		case "26":
		roast = "dosn't your mother insult you enough?";
		break;
		case "27":
		roast = "your waifu is trash and you have shit taste.";
		break;
		case "28":
		roast = "you like the wendey's memer comercal, don't you?";
		break;
		case "29":
		roast = "the only way you're getting laid is to rest.";
		break;
		case "30":
		roast = "your sister is hotter than you will ever be.";
		break;
		case "31":
		roast = "I bet you play monster girl quest.";
		break;
		case "32":
		roast = "I don't have to insult you, everyone here has seen how you act.";
		break;
		case "33":
		roast = "I don't have time for this. go masturbate or something.";
		break;
		case "34":
		roast = "I hear you tried drinking your cousin's semen. how'd it taste?";
		break;
		case "35":
		roast = "but did it feel good tho?";
		break;
		case "36":
		roast = "I was gonna roast you, but then I saw your 'arrow to the knee' folder and decided you do that to yourself enough.";
		break;
		case "37":
		roast = "you horny paistry puffer.";
		break;
		case "38":
		roast = "You're so full of shit that you have diarrhea of the mouth";
		break;
		case "39":
		roast = "I'm sure you're an intelligent person.  Too bad you can't express that in 2000 characters or less.";
		break;
		case "40":
		roast = "Your mom must be very disappointed.";
		break;
		case "41":
		roast = "I have neither the time nor the crayons to explain why your argument is invalid.";
		break;
		case "42":
		roast = "Even Tik Tok wouldn't want to advertise you.";
	}
	return roast;
}