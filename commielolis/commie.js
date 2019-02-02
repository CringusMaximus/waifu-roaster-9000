exports.sendCommieLoli = function (userID, mod) {

    var n = ((Number(userID) % 500) + Number(mod)) % 36;//final number is last case + 1
    var numstr = n.toString(10);
    var location;
    switch (numstr) {
        case "0":
            location = "./commielolis/commieloli.jpg";
            break;
        case "1":
            location = "./commielolis/1384ae443c88d2b11b1365eef8965a39.jpg";
            break;
        case "2":
            location = "./commielolis/49a3c454857576036d3a7a1467db272b.jpg";
            break;
        case "3":
            location = "./commielolis/69d.png";
            break;
        case "4":
            location = "./commielolis/75fa79c352f03931c7d5e412db15cbf3.jpg";
            break;
        case "5":
            location = "./commielolis/b3ede4ad70d5facd85eb010b5503a31a.jpg";
            break;
        case "6":
            location = "./commielolis/C9OTpjdXUAImTE1.jpg";
            break;
        case "7":
            location = "./commielolis/china.png";
            break;
        case "8":
            location = "./commielolis/commieloli10.jpg";
            break;
        case "9":
            location = "./commielolis/commieloli11.png";
            break;
        case "10":
            location = "./commielolis/commieloli12.png";
            break;
        case "11":
            location = "./commielolis/commieloli13.PNG";
            break;
        case "12":
            location = "./commielolis/commieloli14.jpg";
            break;
        case "13":
            location = "./commielolis/commieloli2.jpg";
            break;
        case "14":
            location = "./commielolis/commieloli3.jpg";
            break;
        case "15":
            location = "./commielolis/commieloli4.jpg";
            break;
        case "16":
            location = "./commielolis/commieloli5.jpg";
            break;
        case "17":
            location = "./commielolis/commieloli6.jpg";
            break;
        case "18":
            location = "./commielolis/commieloli7.jpg";
            break;
        case "19":
            location = "./commielolis/commieloli8.jpg";
            break;
        case "20":
            location = "./commielolis/commieloli9.jpg";
            break;
        case "21":
            location = "./commielolis/DDR_chan.png";
            break;
        case "22":
            location = "./commielolis/german_soviet_friendship_by_viehdieb-d6r2t70.jpg";
            break;
        case "23":
            location = "./commielolis/IMG_20180427_160016_571.jpg";
            break;
        case "24":
            location = "./commielolis/IMG_20181016_123350_414.jpg";
            break;
        case "25":
            location = "./commielolis/istherehope.png";
            break;
        case "26":
            location = "./commielolis/MARX_CHAN_PLS.png";
            break;
        case "27":
            location = "./commielolis/NVAtsuki.png";
            break;
        case "28":
            location = "./commielolis/red_scarf.jpg";
            break;
        case "29":
            location = "./commielolis/redsquare1958.jpg";
            break;
        case "30":
            location = "./commielolis/remember_no_joki.png";
            break;
        case "31":
            location = "./commielolis/shake.gif";
            break;
        case "32":
            location = "./commielolis/Socialism_with_loli_charachteristics.jpg";
            break;
        case "33":
            location = "./commielolis/ussr.png";
            break;
        case "34":
            location = "./commielolis/vietcongika_rm.png";
            break;
        case "35":
            location = "./commielolis/vietyukari.jpg";
            break;
        
    }
    return location;
}
