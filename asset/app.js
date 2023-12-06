function roundNumber(num, places) {
    
    if (Math.round(num * Math.pow(10, places)) / Math.pow(10, places) % 1 == 0) {
        zeros=""
        for (var i=0; i < places; i++){
            zeros+="0"
        }
        return Math.round(num * Math.pow(10, places)) / Math.pow(10, places)+"."+zeros;
    }
    else if ((Math.round(num * Math.pow(10, places)) / Math.pow(10, places) / 10) % 1 == 0) {
        zeros=""
        for (var i=0; i < places-1; i++){
            zeros+="0"
        }
        return Math.round(num * Math.pow(10, places)) / Math.pow(10, places)+zeros;
    }
    else {
        return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
    }
}
//stats variables 
var totalMoney = 0;
var totalMoneyStat = document.getElementById("totalMoneyDisplay");
totalMoneyStat.innerHTML = "Total money spent: "+ totalMoney;
var clicksCount=0;

var totalItemCount = 0;
var totalUpgradeCount = 0;




/*
var toDeBug = document.getElementById("debugButton");
toDeBug.addEventListener("click", function()
{
        window.alert(munkyMoney); // alerts whatever variable value to see if its adding correctly
    
});
*/

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) +min);
}
/*
function ifValue(limit, simp)
{
    if (value>=limit)
    {
        simpValue = value/limit;
        return (Math.round(simpValue)) ++ "o";
    }
}
*/

function simplify(value) {
    if (value>=100_000_000_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000_000_000;
         return (Math.round(simpValue)) + "o";
    }
    else if (value>=10_000_000_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000_000_000;
         return roundNumber(simpValue,1) + "o";
    }
    else if (value>=1_000_000_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000_000_000;
         return roundNumber(simpValue,2) + "o";
    }
    else if (value>=100_000_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000_000;
         return (Math.round(simpValue)) + "S";
    }
    else if (value>=10_000_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000_000;
         return roundNumber(simpValue,1) + "S";
    }
    else if (value>=1_000_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000_000;
         return roundNumber(simpValue,2) + "S";
    }
    else if (value>=100_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000;
         return (Math.round(simpValue)) + "s";
    }
    else if (value>=10_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000;
         return roundNumber(simpValue,1) + "s";
    }
    else if (value>=1_000_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000_000;
         return roundNumber(simpValue,2) + "s";
    }
    else if (value>=100_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000;
         return (Math.round(simpValue)) + "Q";
    }
    else if (value>=10_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000;
         return roundNumber(simpValue,1) + "Q";
    }
    else if (value>=1_000_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000_000;
         return roundNumber(simpValue,2) + "Q";
    }
    else if (value>=100_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000;
         return (Math.round(simpValue)) + "q";
    }
    else if (value>=10_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000;
         return roundNumber(simpValue,1) + "q";
    }
    else if (value>=1_000_000_000_000_000) {
        simpValue = value/1_000_000_000_000_000;
         return roundNumber(simpValue,2) + "q";
    }
    else if (value>=100_000_000_000_000) {
        simpValue = value/1_000_000_000_000;
         return (Math.round(simpValue)) + "t";
    }
    else if (value>=10_000_000_000_000) {
        simpValue = value/1_000_000_000_000;
         return roundNumber(simpValue,1) + "t";
    }
    else if (value>=1_000_000_000_000) {
        simpValue = value/1_000_000_000_000;
         return roundNumber(simpValue,2) + "t";
    }
    else if (value>=100_000_000_000) {
        simpValue = value/1_000_000_000;
         return (Math.round(simpValue)) + "b";
    }
    else if (value>=10_000_000_000) {
        simpValue = value/1_000_000_000;
         return roundNumber(simpValue,1) + "b";
    }
    else if (value>=1_000_000_000) {
        simpValue = value/1_000_000_000;
         return roundNumber(simpValue,2) + "b";
    }
    else if (value>=100_000_000) {
        simpValue = value/1_000_000;
         return (Math.round(simpValue)) + "m";
    }
    else if (value>=10_000_000) {
        simpValue = value/1_000_000;
         return roundNumber(simpValue,1) + "m";
    }
    else if (value>=1_000_000) {
        simpValue = value/1_000_000;
         return roundNumber(simpValue,2) + "m";
    }
    else if (value>=100_000) {
        simpValue = value/1000;
        return (Math.round(simpValue)) + "k";
    }
    else if (value>=10_000) {
        simpValue = value/1000;
        return roundNumber(simpValue,1) + "k";
    }
    else if (value>=1000) {
        simpValue = value/1000;
        return roundNumber(simpValue,2) + "k";
    }
    else {
        return roundNumber(value,2);
    }
    /*
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(value);
    //return Intl.NumberFormat('en', { notation: 'compact' });
    //return new Intl.NumberFormat().format(value)
    */
}

function moneyIncome() {
    money=money+(0.01*incomeMult);
    countDisplay.innerHTML = "$" + simplify(money);
    // munkys
    if (money >= 1)
    {
        document.getElementsByClassName("shop-banana")[0].style.display="block";
    }
    if (money >= 10)
    {
        document.getElementsByClassName("shop-munky")[0].style.display="block";
    }
    if (money >= 50)
    {
        document.getElementsByClassName("shop-chef-munky")[0].style.display="block";
    }
    if (money >= 500)
    {
        document.getElementsByClassName("shop-rockstar-munky")[0].style.display="block";
    }
    if (money >= 2000)
    {
        document.getElementsByClassName("shop-explorer-munky")[0].style.display="block";
    }
    if (money >= 10000)
    {
        document.getElementsByClassName("shop-pirate-munky")[0].style.display="block";
    }
    if (money >= 25000)
    {
        document.getElementsByClassName("shop-scientist-munky")[0].style.display="block";
    }
    if (money >= 100000)
    {
        document.getElementsByClassName("shop-spy-munky")[0].style.display="block";
    }
    if (money >= 500000)
    {
        document.getElementsByClassName("shop-ninja-munky")[0].style.display="block";
    }
    if (money >= 2000000)
    {
        document.getElementsByClassName("shop-robo-munky")[0].style.display="block";
    }
    if (money >= 5000000)
    {
        document.getElementsByClassName("shop-superhero-munky")[0].style.display="block";
    }
    if (money >= 25000000)
    {
        document.getElementsByClassName("shop-space-munky")[0].style.display="block";
    }

    // upgrades 
    
    
    
    
    if (bananaCount >= 10 && upgrade1Count == 0)
    {
        document.getElementsByClassName("upgradeItem1")[0].style.display="block";
    }
    
    if (money >= 500 && upgrade2Count == 0)
    {
        document.getElementsByClassName("upgradeItem2")[0].style.display="block";
    }
    
    if (money >= 2000 && upgrade3Count == 0)
    {
        document.getElementsByClassName("upgradeItem3")[0].style.display="block";
    }
    
    if (money>=5000 && upgrade4Count == 0)
    {
        document.getElementsByClassName("upgradeItem4")[0].style.display="block";
    }
    
    if (money>=5000 && upgrade5Count == 0)
    {
        document.getElementsByClassName("upgradeItem5")[0].style.display="block";
    }
    
    if (money>=750 && upgrade6Count == 0)
    {
        document.getElementsByClassName("upgradeItem6")[0].style.display="block";
    }
    
    if (money>=7500 && upgrade7Count == 0)
    {
        document.getElementsByClassName("upgradeItem7")[0].style.display="block";
    }
    
    if(money>=20000 && upgrade8Count == 0)
    {
        document.getElementsByClassName("upgradeItem8")[0].style.display="block";
    }
    
    if(money>=50000 && upgrade9Count == 0)
    {
        document.getElementsByClassName("upgradeItem9")[0].style.display="block";
    }
    
    if(money>=75000 && upgrade10Count == 0)
    {
        document.getElementsByClassName("upgradeItem10")[0].style.display="block";
    }
    
    if(money>=100000 && upgrade11Count == 0)
    {
        document.getElementsByClassName("upgradeItem11")[0].style.display="block";
    }
    
    
    
    
    
    countClicks.innerHTML = "Lifetime Clicks: " + clicksCount;
    theItemCount.innerHTML = "Items Bought: " + totalItemCount;
    theUpgradeCount.innerHTML = "Upgrades Bought: " + totalUpgradeCount;
}

var isAdmin = false;
var zeros;
var simpMoney;
var intervalID = window.setInterval(moneyIncome, 10);
var money = 0;
var bananaMunkyName = "1234";
var clickMult = 1;
var incomeMult = 0;
var bananaCost = 5;
var munkyCost = 25;
var chefCost = 500;
var rockstarCost = 2000;
var explorerCost = 10000;
var pirateCost = 25000;
var pirateCount = 0;
var scientistCost = 100000;
var scientistCount = 0;
var spyCost = 500000;
var spyCount = 0;
var ninjaCost = 2000000; // 2 mil
var ninjaCount= 0;
var roboCost = 5000000;
var roboCount=0;
var superheroCost = 25000000;
var superheroCount = 0;
var spaceCost = 100000000;
var spaceCount=0;
var countDisplay = document.getElementById("money");



var incomeDisplay = document.getElementById("incomeMulti");
incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);


// counts for amount bought 

var bananaCount = 0;
var bananaMoney = 0;
var munkyCount = 0;
var munkyMoney = 0;
var munkyMoneyValue = 1;
var chefCount = 0;
var chefMoney = 0;
var chefMoneyValue = 10;
var rockstarCount = 0;
var rockstarMoney = 0;
var rockstarMoneyValue = 25;
var explorerCount=0;
var explorerMoney = 0;
var explorerMoneyValue = 75;
var pirateMoneyValue = 200;
var scientistMoneyValue = 1000;
var spyMoneyValue= 4000;
var ninjaMoneyValue=17500;
var roboMoneyValue=50000;
var superheroMoneyValue=200000;
var spaceMoneyValue=1250000;


// upgrade variables (for multiplier)
var upgradedClickMult =0.1;





//for upgrades






var clickUpgrade1Cost = 500;
var upgrade1Count = 0;

var munkyUpgrade2Cost = 2000;
var upgrade2Count = 0;

var munkyUpgrade3Cost = 7500;
var upgrade3Count = 0;

var munkyUpgrade4Cost = 20000;
var upgrade4Count = 0;

var clickUpgrade5Cost = 20000;
var upgrade5Count = 0;

var munkyUpgrade6Cost = 2500;
var upgrade6Count = 0;

var munkyUpgrade7Cost = 20000;
var upgrade7Count = 0;

var munkyUpgrade8Cost = 50000;
var upgrade8Count = 0;

var munkyUpgrade9Cost = 100000;
var upgrade9Count = 0;

var clickUpgrade10Cost = 150000;
var upgrade10Count = 0;

var munkyUpgrade11Cost = 200000;
var upgrade11Count = 0;



// main button
var xAmount;
var yAmount;
var mainClick = document.getElementById("main-button");
var divWidth;
var divHeight = 40;
// stats:

var countClicks = document.getElementById("numClicks");
var theItemCount = document.getElementById("totalItemsBought");
var theUpgradeCount = document.getElementById("totalUpgradesBought");

mainClick.addEventListener("click", function()
{
    money+=1*clickMult;
    clicksCount++;
    totalItemCount = bananaCount + munkyCount + chefCount + rockstarCount+ explorerCount + pirateCount + scientistCount + spyCount + ninjaCount + roboCount + superheroCount + spaceCount;
    totalUpgradeCount = upgrade1Count + upgrade2Count + upgrade3Count + upgrade4Count + upgrade5Count + upgrade6Count + upgrade7Count + upgrade8Count + upgrade9Count + upgrade10Count + upgrade11Count;
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);
    
    
    //money thing
    var money_thing = document.createElement("div");
    money_thing.style.zIndex = "999";
    money_thing.classList.add("click-score");
    money_thing.textContent = "+" + simplify(clickMult);
    divWidth = money_thing.clientWidth;
    money_thing.style.display = "block";
    money_thing.style.top = (event.clientY - divHeight) + "px";
    money_thing.style.left = (event.clientX - divWidth) + "px";
    document.body.appendChild(money_thing);
    xAmount = getRndInt(-100,100);
    yAmount = getRndInt(200,1000);
    money_thing.style.setProperty("--x-amount", xAmount +"px");
    money_thing.style.setProperty("--y-amount", yAmount +"px");
    setTimeout(() => {
        money_thing.style.display = "none";
        money_thing.remove();
    }, 2000);
    
    
    
    
    
    
    
    
    

});



//-----------------------------------------------------------items-----------------------------------------------------------

// banana
var bananaLabel = document.getElementById("howManyBanana");
var bananaPickerBuy = document.getElementById("bananaButton");
bananaPickerBuy.innerText="$" + simplify(bananaCost);
bananaPickerBuy.addEventListener("click", function()
{
    if(money>bananaCost)
    {
        bananaCount++;
        money -= bananaCost;
        totalMoney=totalMoney + bananaCost;
        bananaCost *=1.25;
        clickMult+=upgradedClickMult;
        incomeMult+=0.1;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    
    bananaButton.innerText="$" + simplify(bananaCost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    bananaLabel.innerHTML = "x" + bananaCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    
});
// munky
var munkyLabel = document.getElementById("howManyMunky");
var munkyBuy = document.getElementById("munkyButton");
munkyBuy.innerText="$" + simplify(munkyCost);
munkyBuy.addEventListener("click", function()
{
    if(money>=munkyCost)
    {
        munkyCount++;
        money-=munkyCost;
        totalMoney = totalMoney +  munkyCost;
        munkyCost*=1.25;
        incomeMult+=munkyMoneyValue;
        munkyMoney+=munkyMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);
    munkyBuy.innerText="$" + simplify(munkyCost);
    munkyLabel.innerHTML = "x" + munkyCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// chef munky
var chefLabel = document.getElementById("howManyChef");
var chefBuy = document.getElementById("chefButton");
chefBuy.innerText="$" + simplify(chefCost);
chefBuy.addEventListener("click", function()
{
    if(money>=chefCost)
    {
        chefCount++;
        money-=chefCost;
        totalMoney=totalMoney +chefCost;
        chefCost*=1.25;
        incomeMult+=chefMoneyValue;
        chefMoney+=chefMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    chefBuy.innerText="$" + simplify(chefCost);
    chefLabel.innerHTML = "x" + chefCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    });
// rockstar munky
var rockstarLabel = document.getElementById("howManyRockstar");
var rockstarBuy = document.getElementById("rockstarButton");
rockstarBuy.innerText="$" + simplify(rockstarCost);
rockstarBuy.addEventListener("click", function()
{
    if(money>=rockstarCost)
    {
        rockstarCount++;
        money-=rockstarCost;
        totalMoney=totalMoney +  rockstarCost;
        rockstarCost*=1.25;
        incomeMult+=rockstarMoneyValue;
        rockstarMoney+=rockstarMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    rockstarButton.innerText="$" + simplify(rockstarCost);
    rockstarLabel.innerHTML = "x" + rockstarCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// explorer munky
var explorerLabel = document.getElementById("howManyExplorer");
var explorerBuy = document.getElementById("explorerButton");
explorerBuy.innerText="$" + simplify(explorerCost);
explorerBuy.addEventListener("click", function()
{
    if(money>=explorerCost)
    {
        explorerCount++;
        money-=explorerCost;
        totalMoney=totalMoney +  explorerCost;
        explorerCost*=1.25;
        incomeMult+=explorerMoneyValue;
        explorerMoney+=explorerMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    explorerButton.innerText="$" + simplify(explorerCost);
    explorerLabel.innerHTML = "x" + explorerCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// pirate munky
var pirateLabel = document.getElementById("howManyPirate");
var pirateBuy = document.getElementById("pirateButton");
pirateBuy.innerText="$" + simplify(pirateCost);
pirateBuy.addEventListener("click", function()
{
    if(money>=pirateCost)
    {
        pirateCount++;
        money-=pirateCost;
        totalMoney=totalMoney + pirateCost;
        pirateCost*=1.25;
        incomeMult+=pirateMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    pirateButton.innerText="$" + simplify(pirateCost);
    pirateLabel.innerHTML = "x" + pirateCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// scientist munky
var scientistLabel = document.getElementById("howManyScientist");
var scientistBuy = document.getElementById("scientistButton");
scientistBuy.innerText="$" + simplify(scientistCost);
scientistBuy.addEventListener("click", function()
{
    if(money>=scientistCost)
    {
        scientistCount++;
        money-=scientistCost;
        totalMoney=totalMoney +  scientistCost;
        scientistCost*=1.25;
        incomeMult+=scientistMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    scientistButton.innerText="$" + simplify(scientistCost);
    scientistLabel.innerHTML = "x" + scientistCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// spy munky
var spyLabel = document.getElementById("howManySpy");
var spyBuy = document.getElementById("spyButton");
spyBuy.innerText="$" + simplify(spyCost);
spyBuy.addEventListener("click", function()
{
    if(money>=spyCost)
    {
        spyCount++;
        money-=spyCost;
        totalMoney=totalMoney +  spyCost;
        spyCost*=1.25;
        incomeMult+=spyMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    spyButton.innerText="$" + simplify(spyCost);
    spyLabel.innerHTML = "x" + spyCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// ninja munky
var ninjaLabel = document.getElementById("howManyNinja");
var ninjaBuy = document.getElementById("ninjaButton");
ninjaBuy.innerText="$" + simplify(ninjaCost);
ninjaBuy.addEventListener("click", function()
{
    if(money>=ninjaCost)
    {
        ninjaCount++;
        money-=ninjaCost;
        totalMoney=totalMoney +  ninjaCost;
        ninjaCost*=1.25;
        incomeMult+=ninjaMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    ninjaButton.innerText="$" + simplify(ninjaCost);
    ninjaLabel.innerHTML = "x" + ninjaCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// robo munky
var roboLabel = document.getElementById("howManyRobo");
var roboBuy = document.getElementById("roboButton");
roboBuy.innerText="$" + simplify(roboCost);
roboBuy.addEventListener("click", function()
{
    if(money>=roboCost)
    {
        roboCount++;
        money-=roboCost;
        totalMoney=totalMoney + roboCost;
        roboCost*=1.25;
        incomeMult+=roboMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    roboButton.innerText="$" + simplify(roboCost);
    roboLabel.innerHTML = "x" + roboCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// superhero munky
var superheroLabel = document.getElementById("howManySuperhero");
var superheroBuy = document.getElementById("superheroButton");
superheroBuy.innerText="$" + simplify(superheroCost);
superheroBuy.addEventListener("click", function()
{
    if(money>=superheroCost)
    {
        superheroCount++;
        money-=superheroCost;
        totalMoney=totalMoney + superheroCost;
        superheroCost*=1.25;
        incomeMult+=superheroMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    superheroButton.innerText="$" + simplify(superheroCost);
    superheroLabel.innerHTML = "x" + superheroCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});
// space munky
var spaceLabel = document.getElementById("howManySpace");
var spaceBuy = document.getElementById("spaceButton");
spaceBuy.innerText="$" + simplify(spaceCost);
spaceBuy.addEventListener("click", function()
{
    if(money>=spaceCost)
    {
        spaceCount++;
        money-=spaceCost;
        totalMoney=totalMoney +  spaceCost;
        spaceCost*=1.25;
        incomeMult+=spaceMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    spaceButton.innerText="$" + simplify(spaceCost);
    spaceLabel.innerHTML = "x" + spaceCount;
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
});


// ------------------------------------------------------ upgrades -------------------------------------------------------

// upgrade #1 (click upgrade 1)

var upgrade1Buy = document.getElementById("clickUpg1");
var upgrade1Class = document.getElementsByClassName("upgradeItem1")[0];
upgrade1Buy.innerText="$" + simplify(clickUpgrade1Cost);
upgrade1Buy.addEventListener("click", function()
{
    if(money>clickUpgrade1Cost)
    {   
        upgrade1Count++;
        money -= clickUpgrade1Cost;
        totalMoney=totalMoney+ clickUpgrade1Cost;
        upgradedClickMult*=2;
        clickMult*=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade1Class.style.display = "none";
    
    countDisplay.innerHTML = "$" + simplify(money);
    clickUpg1.innerText="$" + simplify(clickUpgrade1Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+simplify(totalMoney,2);
    }
});
// upgrade #2 (munky upgrade 1)

var upgrade2Buy = document.getElementById("munkyUpg2");
var upgrade2Class = document.getElementsByClassName("upgradeItem2")[0];
upgrade2Buy.innerText="$" + simplify(munkyUpgrade2Cost);
upgrade2Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade2Cost)
    {   
        upgrade2Count++;
        money -= munkyUpgrade2Cost;
        totalMoney=totalMoney + munkyUpgrade2Cost;
        incomeMult = incomeMult + munkyMoney;
        munkyMoney*=2;
        munkyMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade2Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg2.innerText="$" + simplify(munkyUpgrade2Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});


// upgrade #3 (chef munky 1)

var upgrade3Buy = document.getElementById("munkyUpg3");
var upgrade3Class = document.getElementsByClassName("upgradeItem3")[0];
upgrade3Buy.innerText="$" + simplify(munkyUpgrade3Cost);
upgrade3Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade3Cost)
    {   
        upgrade3Count++;
        money -= munkyUpgrade3Cost;
        totalMoney=totalMoney + munkyUpgrade3Cost;
        incomeMult = incomeMult + chefMoney;
        chefMoney*=2;
        chefMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade3Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg3.innerText="$" + simplify(munkyUpgrade3Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});

// upgrade #4 (rockstar munky 1)(comment written by xreqs not trashycan who sux at rocket league not even gc smh)

var upgrade4Buy = document.getElementById("munkyUpg4");
var upgrade4Class = document.getElementsByClassName("upgradeItem4")[0];
upgrade4Buy.innerText="$" + simplify(munkyUpgrade4Cost);
upgrade4Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade4Cost)
    {   
        upgrade4Count++;
        money -= munkyUpgrade4Cost;
        totalMoney=totalMoney + munkyUpgrade4Cost;
        incomeMult = incomeMult + rockstarMoney;
        rockstarMoney*=2;
        rockstarMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade4Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg4.innerText="$" + simplify(munkyUpgrade4Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});


// upgrade #5 (banana upgrade 2)

var upgrade5Buy = document.getElementById("clickUpg5");
var upgrade5Class = document.getElementsByClassName("upgradeItem5")[0];
upgrade5Buy.innerText="$" + simplify(clickUpgrade5Cost);
upgrade5Buy.addEventListener("click", function()
{
    if(money>clickUpgrade5Cost)
    {   
        upgrade5Count++;
        money -= clickUpgrade5Cost;
        totalMoney=totalMoney +  clickUpgrade5Cost;
        upgradedClickMult*=2;
        clickMult*=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade5Class.style.display = "none";
    
    countDisplay.innerHTML = "$" + simplify(money);
    clickUpg5.innerText="$" + simplify(clickUpgrade1Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});



// upgrade 6(munky upgrade 2)
var upgrade6Buy = document.getElementById("munkyUpg6");
var upgrade6Class = document.getElementsByClassName("upgradeItem6")[0];
upgrade6Buy.innerText="$" + simplify(munkyUpgrade2Cost);
upgrade6Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade6Cost)
    {   
        upgrade6Count++;
        money -= munkyUpgrade6Cost;
        totalMoney=totalMoney + munkyUpgrade6Cost;
        incomeMult = incomeMult + munkyMoney;
        munkyMoney*=2;
        munkyMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade6Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg6.innerText="$" + simplify(munkyUpgrade6Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});



// upgrade 7 (munky upgrade 3)

var upgrade7Buy = document.getElementById("munkyUpg7");
var upgrade7Class = document.getElementsByClassName("upgradeItem7")[0];
upgrade7Buy.innerText="$" + simplify(munkyUpgrade7Cost);
upgrade7Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade7Cost)
    {   
        upgrade7Count++;
        money -= munkyUpgrade7Cost;
        totalMoney=totalMoney +  munkyUpgrade7Cost;
        incomeMult = incomeMult + munkyMoney;
        munkyMoney*=2;
        munkyMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade7Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg7.innerText="$" + simplify(munkyUpgrade7Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});


// upgrade 8 (chef upgrade 3)

var upgrade8Buy = document.getElementById("munkyUpg8");
var upgrade8Class = document.getElementsByClassName("upgradeItem8")[0];
upgrade8Buy.innerText="$" + simplify(munkyUpgrade8Cost);
upgrade8Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade8Cost)
    {   
        upgrade8Count++;
        money -= munkyUpgrade8Cost;
        totalMoney=totalMoney +  munkyUpgrade8Cost;
        incomeMult = incomeMult + chefMoney;
        chefMoney*=2;
        chefMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade8Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg8.innerText="$" + simplify(munkyUpgrade8Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});


// upgrade 9 (explore upgrade 1)

var upgrade9Buy = document.getElementById("munkyUpg9");
var upgrade9Class = document.getElementsByClassName("upgradeItem9")[0];
upgrade9Buy.innerText="$" + simplify(munkyUpgrade9Cost);
upgrade9Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade9Cost)
    {   
        upgrade9Count++;
        money -= munkyUpgrade9Cost;
        totalMoney=totalMoney + munkyUpgrade9Cost;
        incomeMult = incomeMult + explorerMoney;
        explorerMoney*=2;
        explorerMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade9Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg9.innerText="$" + simplify(munkyUpgrade9Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+simplify(totalMoney,2);
    }
});



// upgrade #10 (banana upgrade 3)

var upgrade10Buy = document.getElementById("clickUpg10");
var upgrade10Class = document.getElementsByClassName("upgradeItem10")[0];
upgrade10Buy.innerText="$" + simplify(clickUpgrade10Cost);
upgrade10Buy.addEventListener("click", function()
{
    if(money>clickUpgrade10Cost)
    {   
        upgrade10Count++;
        money -= clickUpgrade10Cost;
        totalMoney=totalMoney +  clickUpgrade10Cost;
        upgradedClickMult*=2;
        clickMult*=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade10Class.style.display = "none";
    
    countDisplay.innerHTML = "$" + simplify(money);
    clickUpg10.innerText="$" + simplify(clickUpgrade1Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+simplify(totalMoney,2);
    }
});


// upgrade #11 (rockstar upgrade 3)

var upgrade11Buy = document.getElementById("munkyUpg11");
var upgrade11Class = document.getElementsByClassName("upgradeItem11")[0];
upgrade11Buy.innerText="$" + simplify(munkyUpgrade11Cost);
upgrade11Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade11Cost)
    {   
        upgrade11Count++;
        money -= munkyUpgrade11Cost;
        totalMoney=totalMoney +  munkyUpgrade11Cost;
        incomeMult = incomeMult + rockstarMoney;
        rockstarMoney*=2;
        rockstarMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade11Class.style.display = "none";
    countDisplay.innerHTML = "$" + simplify(money);
    munkyUpg11.innerText="$" + simplify(munkyUpgrade11Cost);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult,1);
    totalMoneyStat.innerHTML = "Total money spent: "+ simplify(totalMoney,2);
    }
});

//-----------------------------------------------------------tooltips-----------------------------------------------------------
var tooltipClass = document.getElementsByClassName("hud-tooltips")[0];
var tooltip = document.getElementById("hud-tooltip");
function tooltipsCopyPasta(element, text)
{
    element.onmouseover = function() {
        
        tooltip.innerHTML = text;
        tooltipClass.style.display = "flex";
        tooltipClass.style.top = element.getBoundingClientRect().y+"px";
        tooltipClass.style.left = "30%";
    };
    element.onmouseout = function() {
        tooltipClass.style.display = "none";
    }
}
var bananaItem = document.getElementsByClassName("shop-banana")[0];
tooltipsCopyPasta(bananaItem, "This basic tool is a small mechanical device designed to pick bananas more efficiently. It's a simple and inexpensive upgrade to help you get started on your monkey-collecting journey.");
var munkyItem = document.getElementsByClassName("shop-munky")[0];
tooltipsCopyPasta(munkyItem, "The regular munky is the quintessential munky species found in various parts of the world. These munkys are skilled climbers, using their dexterous hands and prehensile tails to navigate the treetops with ease and are known for their clever and playful nature.");
var chefItem = document.getElementsByClassName("shop-chef-munky")[0];
tooltipsCopyPasta(chefItem, "Wearing chef hats and aprons, these munkys are culinary experts. They can whip up delicious dishes and are the go-to chefs in the animal kingdom.");
var rockstarItem = document.getElementsByClassName("shop-rockstar-munky")[0];
tooltipsCopyPasta(rockstarItem, "These munkys love to play musical instruments and perform on stage. They are often seen with electric guitars, drums, and flamboyant outfits, entertaining crowds with their music.");
var explorerItem = document.getElementsByClassName("shop-explorer-munky")[0];
tooltipsCopyPasta(explorerItem, "These adventurous munkys are always ready for expeditions to discover new lands and species. They carry maps, compasses, and backpacks as they embark on exciting journeys.");
var pirateItem = document.getElementsByClassName("shop-pirate-munky")[0];
tooltipsCopyPasta(pirateItem, "Dressed in pirate attire, these munkys are known for their love of adventure and treasure hunting. They're often seen with a tiny eyepatch and a miniature cutlass.");
var scientistItem = document.getElementsByClassName("shop-scientist-munky")[0];
tooltipsCopyPasta(scientistItem, "Wearing lab coats and glasses, these munkys are known for their scientific curiosity. They conduct experiments and research, contributing to breakthrough discoveries in various fields.");
var spyItem = document.getElementsByClassName("shop-spy-munky")[0];
tooltipsCopyPasta(spyItem, "These munkys are experts at gathering information discreetly. They have tiny gadgets and are skilled in espionage, making them valuable assets for intelligence agencies.");
var ninjaItem = document.getElementsByClassName("shop-ninja-munky")[0];
tooltipsCopyPasta(ninjaItem, "These agile and stealthy munkys are trained in the art of ninjitsu. They can scale walls, move silently, and are skilled in hand-to-hand combat, making them perfect for covert missions.");
var roboItem = document.getElementsByClassName("shop-robo-munky")[0];
tooltipsCopyPasta(roboItem, "These munkys are part biological and part robotic, equipped with cybernetic enhancements that give them enhanced strength and agility. They are often used in advanced scientific research and as assistants for physically demanding tasks.");
var superheroItem = document.getElementsByClassName("shop-superhero-munky")[0];
tooltipsCopyPasta(superheroItem, "With capes and special powers, these munkys are the defenders of justice. They use their extraordinary abilities to fight crime and protect the innocent.");
var spaceItem = document.getElementsByClassName("shop-space-munky")[0];
tooltipsCopyPasta(spaceItem, "These munkys have been specially trained to live and thrive in the extreme conditions of outer space. They wear astronaut suits and can operate spacecraft, making them essential for space missions.");



//tooltips for upgrades

var upgradeItem1TT = document.getElementsByClassName("upgradeItem1")[0];
tooltipsCopyPasta(upgradeItem1TT, "A banana picker upgrade. You can never have too many bananas. ");


//styling

var hudLeft = document.getElementsByClassName("hud-left")[0];
var shopTop = document.getElementsByClassName("shop-top")[0];
shopTop.style.width = (hudLeft.clientWidth)-40+"px";

var shop = document.getElementsByClassName("shop")[0];
shop.style.height = (0.86*hudLeft.clientHeight)-80+"px";
shop.style.width = (hudLeft.clientWidth)-40+"px";

var settings = document.getElementsByClassName("settings")[0];
settings.style.height = (0.86*hudLeft.clientHeight)-80+"px";
settings.style.width = (hudLeft.clientWidth)-40+"px";
settings.style.display = "none";

var stats = document.getElementsByClassName("stats")[0];
stats.style.height = (0.86*hudLeft.clientHeight)-80+"px";
stats.style.width = (hudLeft.clientWidth)-40+"px";

var menu = document.getElementsByClassName("menu")[0];
menu.style.width = (hudLeft.clientWidth)-40+"px";

var upgradesTop = document.getElementsByClassName("upgrades-top")[0];
upgradesTop.style.width = (hudLeft.clientWidth)-40+"px";

var upgrades = document.getElementsByClassName("upgrades")[0];
upgrades.style.height = (0.86*hudLeft.clientHeight)-80+"px";
upgrades.style.width = (hudLeft.clientWidth)-40+"px";

var socials = document.getElementsByClassName("socials")[0];
socials.style.width = (hudLeft.clientWidth)-40+"px";

var hudCenter = document.getElementsByClassName("hud-center")[0];
mainClick.style.width = (hudCenter.clientWidth)-20+"px";
mainClick.style.height = (hudCenter.clientWidth)-20+"px";


//menu stuff
var settingsButton = document.getElementById("menu-settings");
settingsButton.onclick = () => {
    shopTop.innerHTML="<p>Settings</p>";
    settings.style.position="relative";
    settings.style.display="block";
    shop.style.position="absolute";
    shop.style.display="none";
    stats.style.position="absolute";
    stats.style.display="none";
};
var shopButton = document.getElementById("menu-shop");
shopButton.onclick = () => {
    shopTop.innerHTML="<p>Shop</p>";
    shop.style.position="relative";
    shop.style.display="block";
    stats.style.position="absolute";
    stats.style.display="none";
    settings.style.position="absolute";
    settings.style.display="none";
};
var statsButton = document.getElementById("menu-stats");
statsButton.onclick = () => {
    shopTop.innerHTML="<p>Stats</p>";
    stats.style.position="relative";
    stats.style.display="block";
    shop.style.position="absolute";
    shop.style.display="none";
    settings.style.position="absolute";
    settings.style.display="none";
};



/*
var adminDiv = document.getElementById("admin-console");
adminDiv.style.position="relative"
var adminButton = document.getElementById("admin-button-open");
adminButton.addEventListener("click", function () {
    var password = "xaehgAEGV3jVesIAU#VJase387fVSZe";
    var pwordInput = prompt("Please enter your password:");
  if(password==pwordInput) {
        isAdmin = true;
        adminDiv.style.display="block";
    }
    else if(password!=pwordInput) {
    }
});
 if (isAdmin) {
    
}
*/
var confirmButton = document.getElementById("adminConfirm");
var adminDiv = document.getElementById("admin-console");
adminDiv.style.position="relative"
var adminButton = document.getElementById("admin-button-open");
var adminPass = document.getElementById("adminPassword");
var adminPassDiv = document.getElementsByClassName("adminPassDiv")[0];
adminButton.addEventListener("click", function () {
    adminPassDiv.style.display="block"
});
confirmButton.addEventListener("click", function() {
    if (adminPass.value==bananaMunkyName) {
        isAdmin = true;
        adminDiv.style.display="block";
        adminPass.value = "";
        adminPassDiv.style.display="none";
    }
});





var give1kAdmin = document.getElementById("give-1k");

give1kAdmin.addEventListener("click", function()
{
    money+=1000;
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);

});

var give1mAdmin = document.getElementById("give-1m");

give1mAdmin.addEventListener("click", function()
{
    money+=1000000;
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);

});

var give1bAdmin = document.getElementById("give-1b");

give1bAdmin.addEventListener("click", function()
{
    money+=1000000000;
    countDisplay.innerHTML = "$" + simplify(money);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);

});



// STATS




// ACHIEVEMENTS

if(money >=10)
{
    var Achievement10Dollar = document.getElementById("10DollarMilestone");
    Achievement10Dollar.style.display="block";
}





/* ------------------------------------------------------Munky Backstories/Descriptions(chatgpt'd by ttommy)--------------------------------------------------------------------------

Munky: The regular munky is the quintessential munky species found in various parts of the world. They are known for their clever and playful nature, characterized by a brown or gray fur coat and a wide range of sizes and species, including capuchins, macaques, and howlers. These munkys are skilled climbers, using their dexterous hands and prehensile tails to navigate the treetops with ease.

Space munky: These munkys have been specially trained to live and thrive in the extreme conditions of outer space. They wear astronaut suits and can operate spacecraft, making them essential for space missions.

Robo munky: These munkys are part biological and part robotic, equipped with cybernetic enhancements that give them enhanced strength and agility. They are often used in advanced scientific research and as assistants for physically demanding tasks.

Ninja munky: These agile and stealthy munkys are trained in the art of ninjitsu. They can scale walls, move silently, and are skilled in hand-to-hand combat, making them perfect for covert missions.

Pirate munky: Dressed in pirate attire, these munkys are known for their love of adventure and treasure hunting. They're often seen with a tiny eyepatch and a miniature cutlass.

Spy munky: These munkys are experts at gathering information discreetly. They have tiny gadgets and are skilled in espionage, making them valuable assets for intelligence agencies.

Scientist munky: Wearing lab coats and glasses, these munkys are known for their scientific curiosity. They conduct experiments and research, contributing to breakthrough discoveries in various fields.

Superhero munky: With capes and special powers, these munkys are the defenders of justice. They use their extraordinary abilities to fight crime and protect the innocent.

Rockstar munky: These munkys love to play musical instruments and perform on stage. They are often seen with electric guitars, drums, and flamboyant outfits, entertaining crowds with their music.

Chef munky: Wearing chef hats and aprons, these munkys are culinary experts. They can whip up delicious dishes and are the go-to chefs in the animal kingdom.

Explorer munky: These adventurous munkys are always ready for expeditions to discover new lands and species. They carry maps, compasses, and backpacks as they embark on exciting journeys.



----------------------------------------------------------Upgrades for future reference----------------------------------------------------------

Banana: A banana, just a banana.

Space Fueled Banana: These bananas have been genetically modified to thrive in the vacuum of space. They're the perfect snack for astronauts on long interstellar journeys.

Robo Fueled Banana: Equipped with tiny mechanical components, these bananas are self-peeling and can even offer nutritional data at a glance. They're a high-tech twist on a classic fruit.

Ninja Fueled Banana: These stealthy bananas are known for their ability to disappear in the blink of an eye, making them the go-to choice for covert snacking.

Pirate Fueled Banana: Dressed in swashbuckling attire, these bananas are the preferred snack for seafaring adventurers who love a taste of the high seas.

Spy Fueled Banana: These bananas come with built-in cameras and microphones, perfect for covert operations in the fruit bowl. They're always keeping an eye on the other fruits.

Scientist Fueled Banana: Sporting mini lab coats and glasses, these bananas are committed to researching the art of potassium and healthy snacking.

Superhero Fueled Banana: With capes made of fruit leather, these bananas have super-peeling powers and are always there to rescue your snack time.

Rockstar Fueled Banana: These bananas have a natural talent for music, and they're the life of the fruit bowl party, bringing rhythm and melody to the scene.

Chef Fueled Banana: Wearing tiny chef hats and aprons, these bananas can add a gourmet twist to your meals, whether in smoothies, desserts, or as a culinary garnish.

Explorer Fueled Banana: These adventurous bananas are always up for being part of new and exciting dishes. They love to journey through different recipes, exploring the world of flavors.

Magical Banana of the Mundane: This banana may look ordinary, but it holds a secret. Every time you click it, it releases a burst of enchantment that subtly boosts your cookie production. It might not be flashy, but its unassuming charm keeps your cookie empire growing, one mysterious bite at a time.

Hyperbolic Banana Splitter: This extraordinary banana is rumored to defy the laws of geometry. With each click, it not only multiplies but also splits into countless other dimensions, producing an ever-increasing supply of bananas! Whether you're baking cookies or unraveling the fabric of reality, this banana is your go-to source for infinite potassium and perplexing paradoxes.

Brought to you by xReqs_ with some assistance from linedhurdle and minimal work from TrashCan1103(he used chat gpt:())
*/
