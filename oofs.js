//mostly just a test for running multiple files for the bot

exports.runOofs = function (userID, cmd){
	var mes = cmd;
	userID = "<@" + userID + ">";
	switch(mes) {
		case 'oof':
		case 'Oof':
		mes =  userID + " has Died.";
		break;
		case 'ultra oof':
		mes = "after five long days of agonizing pain, " + userID + " finally died.";
		/*case '00f':
		" + userID + " was exterminated by Reimu.
		case 'big oof':
		" + userID + " was beaten over the head with a dead meme.
		case 'holy oof':
		" + userID + " was crucified.
		case 'o0f':
		" + userID + " was slain...
		case '0of':
		" + userID + " tried to swim in lava.
		case 'foo':
		" + userID + " has returned to life!
		case 'super oof':
		" + userID + " was cut in half by a special beam cannon.
		case 'mastered ultra instinct super tengen toppa gurren lagann oof':
		" + userID + " was sucked into a black hole of their own creation.
		case 'ooh':
		" + userID + " clued in.
		case 'let the power of oof flow through you!':
		" + userID + " sold their soul for robux.
		case 'supreme oof':
		" + userID + " hit that YEET... and fell out a 5th story window.
		case 'oofing oofs':
		" + userID + " was slain by the cast of friends.
		case 'extra oof':
		" + userID + " was crushed by a large soda.
		case 'hell oof':
		" + userID + " was hacked in half by a chainsaw.
		case 'doom oof':
		" + userID + " :	" + userID + " was crushed by the moon while trying to steal it.
		case 'sun oof':
		" + userID + " thought they could swallow the sun.
		case 'pure oof':
		" + userID + " dosn't feel too good...
		case 'rape oof':
		" + userID + " was asked, 'did it feel good tho'?
		case 'nigger kike spic dyke oof':
		" + userID + " was gassed.
		case 'the great oof':
		" + userID + " died in world oof II
		case 'world oof i':
		" + userID + " was killed by shrapnel.
		case 'world oof ii':
		" + userID + " was bombed.
		case 'too many oofs':
		" + userID + " was oofed to death.
		case 'ooferwatch':
		" + userID + " was gunned down by a robot.
		case 'sky oof':
		" + userID + " was eaten by a dragon.
		case 'sea oof':
		" + userID + " was eaten by a tentacle monster.
		case 'land oof':	" + userID + " was eaten by a sandworm.
		case 'oofadins':
		" + userID + " died of boredom.
		case 'team oofress 2':
		" + userID + " tried to fight someone with 10 years of experience on them.
		case 'wetback oof':
		" + userID + " drowned.
		case 'fucking mega oof':
		" + userID + " imploded.
		case 'foof':
	" + userID + " has died.died has " + userID + "
		case 'wonderfully great oof':
	" + userID + " exploded, and then the universe reset.
		case 'sad oof':
	" + userID + " died of dehydration after crying for 10 days straight.
		case 'woof':
	" + userID + " was bitten by a rabid dog.
		case 'whoof':
	" + userID + " freed his mind... with a bullet.
		case 'owoof':
	" + userID + " pounced onto a bulge... that was the nuclear launch button.
		case 'oofity':
	" + userID + " fell down a flight of stairs.
		case 'oof oof':
	" + userID + " died of being killed.
		case 'kaboof':
	" + userID + " let the terrorists win.
		case 'army of oof':
	" + userID + " thought he could fight a 7 nation army. they were wrong.
		case 'the oof is a pathway to many abilities some consider to be unnatural':
	" + userID + " was killed in their sleep by their apprentice.
		case 'oo-f':
	" + userID + " was killed by an experimental fighter jet.
		case 'offo':
	.died has " + userID + " has died.
		case 'bhava-agra oof':
	" + userID + " fell from heaven.
		case 'oo':
	" + userID + " has d -
		case 'star war oof':
	" + userID + " has been dismembered.
		case 'we're pushing oof levels that shouldn't even be possible':
	" + userID + " was vaporised by the power of oof.
		case "it's high oof":
	" + userID + " was shot.
		case 'oofy mcoof':
	" + userID + " found his lungs were full of sand.
		case 'oof*':
	" + userID + " has corrected past oofs.
		case 'o o f':
	" + userID + " as a result of unknown conditions after stating the death sound in a game called 'roblox', has perished.
		case 'super oof bros':
	" + userID + " went flying off the stage.
		case 'oof roh dah':
	" + userID + " was flung off a cliff
		case 'roblox: the last oofbender':
	" + userID + " had their anus invaded by the fire nation.
		case 'typoof':
	" + userID + " gA SUWS
		case 'doof':
	" + userID + " was slain by a hack-o-maimer.
		case 'doof 2':
	" + userID + " went to hell, and never returned.
		case 'doof 3':
	" + userID + " died from poor design.
		case 'doof 2016':
	" + userID + " was hit by the BFG.
		case 'mcoof':
	" + userID + " had a McHeartattack.
		case '**word of power learned: oof, unrelenting oof**':
	" + userID + " was killed by a rather loud shout.
		case 'oofness within oofness awaits you':
	" + userID + " got sucked into the darkness.
		case 'goldenoof':
	" + userID + " was at the wrong end of the golden gun.
		case "cirno's perfect oof":
	" + userID + " divided by zero.
		case 'junkoof':
	" + userID + " was purified.
		case "junko's oof":
	" + userID + " was killed by chang'e.
		case 'oof oof binks':
	" + userID + " was killed by a swarm of raging fanboys.
		case 'i have the high oof	" + userID + " was wrong. he actually had the lava ground.
		case 'you were the chosen oof	" + userID + " was cut in half.
		case 'this is where the oof begins	" + userID + " was shot out of the sky.
		case 'za warudoof	" + userID + " was knifed.
		case 'my oof is the oof that pierces the oof	" + userID + " couldn't handle 3 dicks at the same time.
		case 'this divine oof shall pierce the skies!	" + userID + " got killed by Siegfried.
		case 'row row oof the power	" + userID + " let go, jack.
		case 'roof	" + userID + " raised the roof and it fell on them, snapping their neck, killing them instantly.
		case 'poof	" + userID + " was too gay to live
		case 'you oofed	" + userID + " has lost their souls
		case 'spoof	" + userID + " thought it was merely a flesh wound.
		case 'infinity oof	" + userID + " was slain for mistress death.
		case 'proof	the person that commited the crime... was " + userID + "! no alibi, no justice, no dream, no hope! TAKE THAT!
		case 'ragnaroof	the world has ended, and so has humanity, including " + userID + ".
		case 'ubisoof	" + userID + " was killed by live services
		case 'ewoof	" + userID + " was disgusted, and died as a result.
		case 'praise the oof	" + userID + " has praised their demise.
		case 'perfect oof	" + userID + " has been frozen to death.
		case 'where's ma supa soof	" + userID + " was frozoned to death.
		case 'pokeoof':
	A critical hit! it's super effective! " + userID + " fainted!
		case 'gachi oof	" + userID + " didn't pay 300 dollars for fisting.
		case 'waifoof':
	" + userID + " realised he will never hold hands with his waifu, and thus committed sudoku.
		case 'it's real oof hours':
	" + userID + " died from lack of sleep.
		case 'you challenge oofkoa?':
	" + userID + " challenged Makoa.
		case 'r34 oof':
	" + userID + " drank bleach after looking at a rule 34 image.
		case 'roof 34':
	" + userID + " was lewded to death.
		case 'hadoofen':
		" + userID + " thought it was a good idea to pick a fight with an electric man-beast.
		case 'spicy oof':
	" + userID + " watched too many spicy memes, killing them instantly.
		case 'is this an oof':
	Ego planted a tumor in " + userID + "'s brain.
		case 'what are you doing in my oof':
	shrek bludgeoned " + userID + " to death with an onion.
		case 'it's so fucking oof':
	" + userID + " drowned in cum.
		case 'skidaddle skidoofle':
	" + userID + "'s dick is now a noodle.
		case 'the end of oofvangelion':
	" + userID + " exploded into a puddle of tang.
		//case 'dota twoof	Brutal. Savage. Rekt. {User} was absolutely taken down.
		//case 'oofsie	{User} totally didn't do that on purpose.
		//case 'helloof there	{User} was impaled by magnaguards.
		//case 'i've oofed for 35 years, nows the time i feel alive.	{User} doesn't realise he did the wrong thing.
		//case "i'm connor, the oofdroid sent by cyberlife{User} was deactivated by deviants.
		case 'gonna oof some fucking windows':
	" + userID + " has had it with these motherfucking snakes on this motherfucking plane.
		//case 'awoof	{User} died from cuteness.
		//case 'okoof	{User} was nuclearised by a bird.
		case 'omega oof':
	" + userID + " has ended.
		case 'too much oof':
	greed caused the " + userID + " to explode while searching for power.
		case 'splitting oof':
	" + userID + " attempted to fight Hayabusa in a 1v1.
		case 'of':
	it's oof* (" + userID + " has died)
		case 'oofkake':
	" + userID + " ‚ÍŠï–­‚È”’‚¢—¬‘Ì‚Å“M‚ê...
		//case 'increasingly verboof':
//	{User} has died. {User} has met his end. {User}, after typing the word "oof" on the discord server that is 2hoes, has perished in mysterious circumstances. I am here to inform you that on a server of a chatting platform known as Discord by the name of 2hoes, a person by the name of " + userID + ", after typing the word "oof" in chat, a reference to the death sound of the 2006 game Roblox, has breathed for the last time for some incomprehensible reason. {User} unlifed*/
		default:
		mes = "";
		break;
	}
return mes;
};