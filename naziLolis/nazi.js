exports.sendNaziLoli = function (userID, mod) {

    var n = ((Number(userID) % 500) + Number(mod)) % 43;//final number is last case + 1
    var numstr = n.toString(10);
    var location;
    switch (numstr) {
        case "0":
            location = "./naziLolis/naziloli.jpg";
            break;
        case "1":
            location = "./naziLolis/naziloli2.jpg";
            break;
        case "2":
            location = "./naziLolis/naziloli3.jpg";
            break;
        case "3":
            location = "./naziLolis/naziloli4.jpg";
            break;
        case "4":
            location = "./naziLolis/naziloli5.jpg";
            break;
        case "5":
            location = "./naziLolis/naziloli6.jpg";
            break;
        case "6":
            location = "./naziLolis/naziloli7.jpg";
            break;
        case "7":
            location = "./naziLolis/naziloli8.png";
            break;
        case "8":
            location = "./naziLolis/naziloli9.jpg";
            break;
        case "9":
            location = "./naziLolis/naziloli10.PNG";
            break;
        case "10":
            location = "./naziLolis/naziloli11.jpg";
            break;
        case "11":
            location = "./naziLolis/naziloli12.png";
            break;
        case "12":
            location = "./naziLolis/naziloli13.png";
            break;
        case "13":
            location = "./naziLolis/naziloli14.png";
            break;
        case "14":
            location = "./naziLolis/naziloli15.png";
            break;
        case "15":
            location = "./naziLolis/naziloli16.png";
            break;
        case "16":
            location = "./naziLolis/naziloli17.jpg";
            break;
        case "17":
            location = "./naziLolis/naziloli18.png";
            break;
        case "18":
            location = "./naziLolis/naziloli19.jpg";
            break;
        case "19":
            location = "./naziLolis/naziloli20.jpg";
            break;
        case "20":
            location = "./naziLolis/naziloli21.jpg";
            break;
        case "21":
            location = "./naziLolis/naziloli22.jpg";
            break;
        case "22":
            location = "./naziLolis/naziloli23.jpg";
            break;
        case "23":
            location = "./naziLolis/naziloli24.jpg";
            break;
        case "24":
            location = "./naziLolis/naziloli25.jpg";
            break;
        case "25":
            location = "./naziLolis/naziloli26.jpg";
            break;
        case "26":
            location = "./naziLolis/naziloli27.jpg";
            break;
        case "27":
            location = "./naziLolis/naziloli28.jpg";
            break;
        case "28":
            location = "./naziLolis/naziloli29.jpg";
            break;
        case "29":
            location = "./naziLolis/naziloli30.jpg";
            break;
        case "30":
            location = "./naziLolis/naziloli31.jpg";
            break;
        case "31":
            location = "./naziLolis/naziloli32.jpg";
            break;
        case "32":
            location = "./naziLolis/naziloli33.jpg";
            break;
        case "33":
            location = "./naziLolis/naziloli34.png";
            break;
        case "34":
            location = "./naziLolis/naziloli25.jpg";
            break;
        case "35":
            location = "./naziLolis/naziloli36.jpg";
            break;
        case "36":
            location = "./naziLolis/naziloli37.png";
            break;
        case "37":
            location = "./naziLolis/naziloli38.jpg";
            break;
        case "38":
            location = "./naziLolis/naziloli39.jpg";
            break;
        case "39":
            location = "./naziLolis/naziloli40.png";
            break;
        case "40":
            location = "./naziLolis/hitlerwaifu.jpg";
            break;
        case "41":
            location = "./naziLolis/hitlerotherwaifu.jpg";
            break;
        case "42":
            location = "./naziLolis/hitlerwaifustroll.jpg";
            break;

    }
    return location;
}
