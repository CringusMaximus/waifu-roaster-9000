const Discord = require('discord.io');
const fs = require('fs');
var logger = require('winston');
var auth = require('./auth.json');
var hoe = require('./roasts/touhous');
var hector = require('./roasts/waifuEmblem');
var monika = require('./roasts/doki');
var nep = require('./roasts/nep');
var dio = require('./roasts/jojo');
var succ = require('./roasts/sao');
var gup = require('./roasts/gup');
var neko = require('./roasts/neko');
var mgq = require('./roasts/mgq');
var cp = require('./roasts/cp');
var oofs = require('./oofs');
var serv = require('./roasts/serv');
var insult = require('./roasts/insult');
var NaziLoli = require('./naziLolis/nazi');
var CommieLoli = require('./commielolis/commie');
var CardGen = require('./cardgen');
var incrementor = "0";

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });

logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
	bot.setPresence({ status: 'online', game: { name: '|help' } });
	incrementor = "0";
});

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

bot.on('message',function (user, userID, channelID, messageText, event){

var ServerID = bot.channels[channelID].guild_id;

	//do oofs before commands */
	 bot.sendMessage({ to: channelID, message:oofs.runOofs(userID, messageText)});
	
	var output = "";
    if (fs.existsSync("./users/" + userID + ".json")) {
        let rawdata = fs.readFileSync("./users/" + userID + ".json");
        let userdata = JSON.parse(rawdata);  
        userdata.cash += ((Math.floor(Math.random() * Math.floor(10)))+15);
        //do card stuff
		
		if ( Math.floor(Math.random() * Math.floor(50)) == 0)
		{
			var newcard = CardGen.generateAny(userID,incrementor);
			userdata.cards.push(newcard);
			userdata.cards.sort();
                bot.sendMessage({ to: channelID, message: "hey, <@" + userID + ">. take this " + newcard + ". you can check your cards with ``|cards`` or view this one with ``|view " + newcard + "``." });
		}
		
		let hoeval = Number(incrementor) %8192;
		hoeval += (Number(userID) % 8000);
		incrementor = hoeval.toString(10);
        //save
        let data = JSON.stringify(userdata);
        fs.writeFileSync("./users/" + userID + ".json", data);
    }
    else {
        let newprof = {
            cash: 0,
            cards: [],
        };

        let data = JSON.stringify(newprof);
        fs.writeFileSync("./users/" + userID + ".json", data);  
    }

	
	
    // Our bot needs to know if it needs to execute a command, listen for messageTexts that will start with `|`
	let rdata = fs.readFileSync("./users/" + userID + ".json");
                let usrdata = JSON.parse(rdata); 
    if (messageText.substring(0, 1) == '|') {
        var args = messageText.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
		
        switch (cmd) {
            case 'say':
                bot.sendMessage({ to: channelID, message: messageText.slice(4, (messageText.legnth)) });

                break;
            case 'sayd':
            case 'dsay':
                bot.sendMessage({ to: channelID, message: messageText.slice(5, (messageText.legnth)) });
                bot.deleteMessage({ channelID: channelID, messageID: event.d.id });


                break;
            case 'help':
			
			if(args[0] == "roasts"){
				bot.sendMessage({ to: channelID, message: "``|(series):(waifu)`` - roasts a waifu I know. please use lower case for the series and use undercores for spaces.	``|series`` - gives you the series I curently have roasts for.	  ``|(series):list`` - gives a list of characters I can roast from a given series. ``|insult`` -  will insult you.	 ``|roast`` - sends my master any text following the command, use this for sugestions, roast submissions, and the like.	"});
			}
			else if(args[0] == "general"){
				bot.sendMessage({ to: channelID, message:
                 "``|invite`` - gives you an invite link for me to join your server and a link to Cringus' Underground Mancave.	``|gibwaifu`` - tells you who your touhou waifu is. you cannot change this, they are your waifu for laifu. ``|sendhoe`` also gives a random touhou but changes each time you use it.	``|credits`` - one guy codes me, but multiple people write for me. this gives you a list.	i've got some other secrets hidden here too, so be sure too look for 'em. some you will almost certainly find by accident, but others... well." });
			}
			else if(args[0] == "cards"){
				bot.sendMessage({ to: channelID, message:
                 "as you do shit, you will slowly get cash money and ocasonaly be given trading cards. use ``|cash`` to see your current cash money, ``|cards`` to see all your cards, ``|view (card name)`` to look at the card. a blue border indicates a common card, green is uncommon, yellow is rare, red is superrare, and multicolour is legendary. ``|sell (card name`` will pay you a random amount of cash money based on the rarity of the card. ``|buyc (rarity)`` will spend your hard earned cash money for a random card of the specified rarity.a common card costs 300, an uncommon 1500, a rare 7500, a superrare 37500, and a legendary card costs a whopping 187500 cash money." });
			}
			else{
				bot.sendMessage({ to: channelID, message:
                 "``|help cards``, ``|help general``, and ``|help roasts`` are your friends. also try ``|edge`` and ``|heck``." });
			}
                break;
            case 'series':
                bot.sendMessage({ to: channelID, message: "these are the series I curently know about: ``touhou, doki_doki, fire_emblem, neptunia, jojo, sword_art_online, girls_und_panzer, monster_girl_quest, nekopara, corpse_party.``" });
                break;
            case 'invite':
            case 'link':
                bot.sendMessage({ to: channelID, message: "this is my invite link if you want me on your server: https://discordapp.com/oauth2/authorize?&client_id=445632583238156288&scope=bot&permissions=0" });
                bot.sendMessage({ to: channelID, message: "If you want to join my server, go here: https://discord.gg/b3TTcaf" });
                break;
            // |ping
            case 'ping':
                bot.sendMessage({ to: channelID, message: 'well, you asked for it. @everyone' });
                break;

            case 'edge':
                bot.sendMessage({ to: channelID, message: "world is a fuck kill em all 1989 " + userID + " dead cops" });
                break;

            case "gibwaifu":
                bot.sendMessage({ to: channelID, message: "your waifu is " + hoe.findWaifu(userID) + ", and there's nothing you can do about it! enjoy your waifu, it's never gonna change. your waifu is for laifu." });
                break;

            
            //begin the roast section
            case 'roast':
                if (userID != "445632583238156288") {
                    if (messageText.length <= "|roast ".length) {
                        bot.sendMessage({ to: channelID, message: "right, you need to tell me who you're roasting and the roast. can't just leave this blank." });
                    } else if (messageText.length <= "|roast ur mum from home and a roast".length) {
                        bot.sendMessage({ to: channelID, message: "ok so. first off this is the suggestion command. second, you're gonna want to name who you're roasting, say where they're from, and make the roast interesting fam." });
                    } else {
                        bot.sendMessage({ to: "477837817985368067", message: messageText });

                        bot.sendMessage({ to: channelID, message: "I have sent your roast to my master. if all goes well, it should get added shortly." });
                    }
                }

                break;
            case 'credits':
                bot.sendMessage({ to: channelID, message: "Thanks to deadmeme, Chang'e, ho chi meme, Comrade MEI, darkspyro458, retarded seagull, and everyone else who has sent in roasts. I was created by Cringus Maximus#6948." });
                break;

            case 'cash':
                let rawdata = fs.readFileSync("./users/" + userID + ".json");
                let userdata = JSON.parse(rawdata); 
                bot.sendMessage({
                    to: channelID, message:"you have " + userdata.cash.toString(10) + " cash money on hand."
                });
                break;
				
				case 'view':
                
				for(let i = 0; i < usrdata.cards.length;i++){
                if(usrdata.cards[i] == messageText.slice(6, (messageText.legnth)))
				{
					(!bot.uploadFile({ to: channelID, file:"./cards/" + usrdata.cards[i]+".png"}))
						
					return;
				}
				}
				
				bot.sendMessage({
                    to: channelID, message:"you do not have '" + messageText.slice(6, (messageText.legnth)) + "'"
                });
                
                break;

				case 'cards':
				let output = "here are all the cards you currently own:";
				let lastCard = "";
				let count = 0;
				for(let i = 0; i < usrdata.cards.length;i++){
					if(usrdata.cards[i] != lastCard)
					{
						if(count != 0)
						{
							output += "x" + count;
							count = 0;
						}
						output += " ``" + usrdata.cards[i] + "``";
						lastCard = usrdata.cards[i];
					}
                count++;
				
                }
				output += "x" + count;
							count = 0;
				bot.sendMessage({
                    to: channelID, message: output});
				break;
				
				case 'shop':
				case 'buyc':
				let rarity = messageText.slice(6, (messageText.legnth));
				let newcard = "fail";
				if(rarity == 'legendary')
				{
					if(usrdata.cash > 187500)
					{
						usrdata.cash -= 187500;
						newcard = CardGen.generateCommon();
					}
				}
				else if(rarity == 'uncommon')
				{
					if(usrdata.cash > 1500)
					{
						usrdata.cash -= 1500;
						newcard = CardGen.generateUnCommon();
					}
				}
				else if(rarity == 'rare')
				{
					if(usrdata.cash > 7500)
					{
						usrdata.cash -= 7500;
						newcard = CardGen.generateRare();
					}
				}
				else if(rarity == 'superrare')
				{
					if(usrdata.cash > 37500)
					{
						usrdata.cash -= 37500;
						newcard = CardGen.generateSuperRare();
					}
				}
				else
					{
					if(usrdata.cash > 300)
					{
						usrdata.cash -= 300;
						newcard = CardGen.generateCommon();
					}
				}
				
				if(newcard == "fail")
				{
					bot.sendMessage({
                    to: channelID, message: "you can't afford that card. a common card costs 300, an uncommon 1500, a rare 7500, a superrare 37500, and a legendary card costs a whopping 187500 cash money."});
				}
				else{
					bot.sendMessage({
                    to: channelID, message: "congratulations, you just bought a " + newcard + "! you can view it with ``|view" + newcard + "``."});
					usrdata.cards.push(newcard);
					usrdata.cards.sort();
					let data = JSON.stringify(usrdata);
        fs.writeFileSync("./users/" + userID + ".json", data);
				}
				break;

				case 'sell':
				for(let i = 0; i < usrdata.cards.length;i++){
                if(usrdata.cards[i] == messageText.slice(6, (messageText.legnth)))
				{
					//to sell a card based on rarity, we'll want to see how rare it is.
					//additionaly, I like random numbers, so we'll be calling our GenerateAny cardgen function and looking for a match
					//counting the number of times searched, and giving the user that much cash money.
					//this recursive function could take a long time to complete, so it's better to thread it if possible.
					let placeholder = usrdata.cards[0];
					usrdata.cards[0] = usrdata.cards[i];
					usrdata.cards[i] = placeholder;
					usrdata.cards.shift();
					usrdata.cards.sort();
					let data = JSON.stringify(usrdata);
					fs.writeFileSync("./users/" + userID + ".json", data);
					makeItRain(messageText.slice(6, (messageText.legnth)),userID, channelID)
					
					return;
				}}
				bot.sendMessage({
                    to: channelID, message:"you do not have '" + messageText.slice(6, (messageText.legnth)) + "'"
                });
				break;
            //send lolis
			
            

            case 'cinnamonattack':
                bot.sendMessage({ to: "500829515363123220", message: "https://www.youtube.com/watch?v=u5_9f1buGBU" });
                break;

                break;


            case 'oofpasta':
                bot.sendMessage({ to: channelID, message: "foo, ooh, oof, o0f, 0of, ultra oof, 00f, big oof, holy oof, super oof, mega oof, let the power of oof flow through you!, mastered ultra instinct super tengen toppa gurren lagann oof, supreme oof, oofing oofs, extra oof, hell oof, doom oof, moon oof, sun oof, pure oof, rape oof, the great oof, world oof I, world oof II, too many oofs, sky oof, sea oof, land oof, ooferwatch, oofadins, team oofress 2, wetback oof, fucking mega oof, foof, wonderfully great oof, woof, whoof, owoof, oofity, oof oof, kaboof, army of oof, The oof is a pathway to many abilities some consider to be unnatural, oo-f, offo, bhava-agra oof, oo, star war oof, oof*, we're pushing oof levels that shouldn't even be possible, it's high oof, oofy mcoof, o o f, super oof bros, oof roh dah, roblox: the last oofbender, typoof, doof, doof 2, doof 3, doof 2016, mcoof, goldenoof, word of power learned: oof, unrelenting oof, oofness within oofness awaits you, Cirno's perfect oof, oof oof binks, I have the high oof, you where the chosen oof, this is where the oof begins, MY OOF IS THE OOF THAT PIERCES THE OOF, za warudoof, This divine oof shall pierce the skies!, Row row oof the power, roof, poof, you oofed, spoof, infinity oof, proof, ragnaroof, ubisoof, ewoof, praise the oof, perfect oof, Where's ma supa soof, pokeoof, Gachi oof, waifoof, it's real oof hours, You challenge oofkoa?, r34 oof, roof 34, hadoofen, it's so fucking oof, Spicy oof, is this an oof, What are you doing in my oof, skidaddle skidoofle, The end of oofvangelion, Dota Twoof, Oofsie, Helloof there, I've oofed for 35 years, nows the time I feel alive., I'm Connor, the oofdroid sent by Cyberlife, Gonna oof some fucking windows, awoof, Okoof, omega Oof, too much oof, splitting oof, of, Increasingly verboof" });
                break;

            // some fun  with semi-random values.
            case 'insult':
                bot.sendMessage({ to: channelID, message: insult.insult(userID, incrementor) });
                var val = Number(incrementor) % 167;
                val += (Number(userID) % 166);
                incrementor = val.toString(10);

                break;

            case 'naziloli':
                
                bot.uploadFile({ to: channelID, file: NaziLoli.sendNaziLoli(userID, incrementor) });
                var n = Number(incrementor) % 167;
                n += (Number(userID) % 40);
                incrementor = n.toString(10);
               
                break;

            case 'commieloli':

                bot.uploadFile({ to: channelID, file: CommieLoli.sendCommieLoli(userID, incrementor) });
                var n = Number(incrementor) % 167;
                n += (Number(userID) % 40);
                incrementor = n.toString(10);

                break;
		
		case 'sendhoe':
		var hoeval = Number(incrementor);
		hoeval += Number(userID) % 167;
		var newHoe = hoe.findWaifu(hoeval.toString(10)	);
		bot.sendMessage({ to: channelID, message: "your random touhou is... " + newHoe });
		hoeval = Number(incrementor) %167;
		hoeval += (Number(userID) % 11);
		incrementor = hoeval.toString(10) ;
		break;
		
		case 'roasthoe':
		var hoeval = Number(incrementor);
		hoeval += Number(userID) % 167;
		logger.info(hoeval);
		var newHoe = hoe.findWaifu(hoeval.toString(10)	);
		//bot.sendMessage({ to: channelID, message: "your random touhou is... " + newHoe });
		input = hoe.roastTouhou("touhou:" + hoe.findWaifu(hoeval));
		if (input == ""){
			output = "...huh. I don't have a roast for " + hoe.findWaifu(hoeval) + " yet. you got anything?" ;
		}
		else{
			output = hoe.roastTouhou(input);
		}
		bot.sendMessage({ to: channelID, message:"your random touhou is... " + hoe.findWaifu(userID) + ", so the roast is... " + output});
		hoeval = Number(incrementor) %167;
		hoeval += (Number(userID) % 11);
		incrementor = hoeval.toString(10);
		
		
		break;
		
		//yay debug commands
		case 'givenum':
		bot.sendMessage({ to: channelID, message: "my semi-random alteration number is " + incrementor + ". this will change whenever a command uses it, exept this one." });
		break;
		
		case 'tefuq':
		bot.sendMessage({ to: channelID, message: args[1]});
		break;
		
		case "gibroast":
                //bot.sendMessage({ to: channelID, message: "your waifu is " + hoe.findWaifu(userID) + ", huh? alright." });
                input = hoe.roastTouhou("touhou:" + hoe.findWaifu(userID));
                if (input == "") {
                    output = "your waifu is " + hoe.findWaifu(userID) + ", huh? 		...huh. I don't have a roast for " + hoe.findWaifu(userID) + " yet. you're off the hook... for now.";
					break;
                }
                else {
                    output = hoe.roastTouhou(input);
                }
                bot.sendMessage({ to: channelID, message: "your waifu is " + hoe.findWaifu(userID) + ", huh? " + output });
                // sendTyping();
                

            default:
			//run roast files
			var roast = "";
			roast = null;
			roast = "";
			var input = oofs.runOofs(userID, messageText);
			if (input != "")
			{
				roast = input;
			};
			input = hoe.roastTouhou(cmd);
			if (input != ""){roast = input};
			input = hector.roastFE(cmd);
			if (input != ""){roast = input};
			input = monika.roastDoki(cmd);
			if (input != ""){roast = input};
			input = nep.roastNep(cmd,userID);
			if (input != ""){roast = input};
			input = dio.roastJojo(cmd);
			if (input != ""){roast = input};
			input = succ.roastArt(cmd);
			if (input != ""){roast = input};
			input = gup.roastX(cmd);
			if (input != ""){roast = input};
			input = neko.roastX(cmd);
			if (input != ""){roast = input};
			input = mgq.roastX(cmd);
			if (input != ""){roast = input};
			input = cp.roastX(cmd);
			if (input != ""){roast = input};
			input = serv.roastX(cmd);
			if (input != ""){roast = input};
			if(roast){
			bot.sendMessage({ to: channelID, message: roast });
			}
			roast = null;
			
                //bot.sendMessage({ to: channelID, message: "I don't know that. i've got commands like ``|series`` and ``|touhou:list`` to let you know what I can do, and you can send me new materal with ``|roast``." });
			
        }
    }
	
});

makeItRain = function(card, userID,channelID){
	bot.sendMessage({ to: channelID, message: "alrighty, i'll look for someone to buyc that card. this could take a while." });
	let i = 0;
	let genCard = "";
	do{
		genCard = CardGen.generateAny(userID,i);
		i++;
	}while(genCard!=card);
	bot.sendMessage({ to: channelID, message: "hey <@" + userID + ">! your " + card + " sold for " + i + " cash money. here ya go!" });
	let rawdata = fs.readFileSync("./users/" + userID + ".json");
        let userdata = JSON.parse(rawdata);
		userdata.cash += i;
		let data = JSON.stringify(userdata);
        fs.writeFileSync("./users/" + userID + ".json", data);
}