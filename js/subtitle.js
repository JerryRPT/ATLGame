// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "im immortal in valorant https://discord.gg/wPaNa7kY36";
say[1] = "we have 20 domains https://discord.gg/wPaNa7kY36";
say[2] = "atl games best games omg https://discord.gg/wPaNa7kY36";
say[3] = "welcome to my rad website!!!!!!!!!!!!!! https://discord.gg/wPaNa7kY36";
say[4] = "I love my cs degree https://discord.gg/wPaNa7kY36";
say[5] = "made with blood sweat and tears https://discord.gg/wPaNa7kY36";
say[6] = "games are 50% complete https://discord.gg/wPaNa7kY36";
say[7] = "Respect chief sosa! https://discord.gg/wPaNa7kY36";
say[8] = '"taliban just like bin laden" - 22Gz https://discord.gg/wPaNa7kY36';
say[9] = "hahahaha https://discord.gg/wPaNa7kY36";
say[10] = "ok for real captchas are getting too hard https://discord.gg/wPaNa7kY36";
say[11] = "THE BEST discord server???!?!?!??! https://discord.gg/wPaNa7kY36";
say[12] = "schools dont like us ???? https://discord.gg/wPaNa7kY36";
say[13] = "educational website! https://discord.gg/wPaNa7kY36";
say[14] = "50% skidded https://discord.gg/wPaNa7kY36";
say[15] = '"we<q>ll turn your drug operation to a track meet" - Polo G https://discord.gg/wPaNa7kY36";'
say[16] = "buy atl hosting https://discord.gg/wPaNa7kY36";
say[17] = "powered by the nvidia rtx 3090 ti https://discord.gg/wPaNa7kY36";
say[18] = "csgo skin opener is fun no cap? https://discord.gg/wPaNa7kY36";
say[19] = "THE kinda GOOD GAMES IN THE WORLD https://discord.gg/wPaNa7kY36";
say[20] = "bob https://discord.gg/wPaNa7kY36";
say[21] = "azure is not happy with me https://discord.gg/wPaNa7kY36";
say[22] = "seed hustling https://discord.gg/wPaNa7kY36";
say[23] = "bear https://discord.gg/wPaNa7kY36";
say[24] = "this website loses me money every month https://discord.gg/wPaNa7kY36";
say[25] = "bestest games https://discord.gg/wPaNa7kY36";
say[26] = "hen https://discord.gg/wPaNa7kY36";
say[27] = "atlhcf anyone remember that?? https://discord.gg/wPaNa7kY36";
say[28] = "fadeflor is very rich idk how https://discord.gg/wPaNa7kY36";
say[29] = "IM IN IM IN IM IN BAMBE STRENGTH 2 https://discord.gg/wPaNa7kY36";
say[30] = "share with your friends ( if you have friends :O ) https://discord.gg/wPaNa7kY36";
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;