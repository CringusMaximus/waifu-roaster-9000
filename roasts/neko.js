exports.roastX = function (message){
	var waifu = message;
switch(waifu) {
	
	case 'nekopara:list':
		waifu = "here are the nekos I know: ``chocola, vanilla.``";
		break;
		case 'nekopara:vanilla':
		case 'nekopara:Vanilla':
		waifu = "you horny pastry puffer.";
		break;
		case 'nekopara:chocola':
		case 'nekopara:Chocola':
		waifu = "ah, i see you like one year old furries.";
		break;
	
	default:
	waifu = "";
}
return waifu;
}