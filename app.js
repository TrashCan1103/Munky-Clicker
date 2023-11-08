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
function simplify(value) {
    if (value>=1000000) {
        simpValue = value/1000000;
         return roundNumber(simpValue,2) + "m";
    }
    else if (value>=100000) {
        simpValue = value/1000;
        return (Math.round(simpValue)) + "k";
    }
    else if (value>=10000) {
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
}

function moneyIncome() {
    money=money+(0.01*incomeMult);
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
}

var zeros;
var simpMoney;
var intervalID = window.setInterval(moneyIncome, 10);
var money = 0;
var clickMult = 1;
var incomeMult = 0;
var bananaCost = 5;
var munkyCost = 50;
var chefCost = 500;
var rockstarCost = 2000;
var explorerCost = 10000;
var pirateCost = 25000;
var scientistCost = 100000;
var spyCost = 500000;
var ninjaCost = 2000000; // 2 mil
var roboCost = 5000000;
var superheroCost = 25000000;
var spaceCost = 100000000;
var countDisplay = document.getElementById("money");
countDisplay.innerHTML = "Current Money: $" + simplify(money);
var multDisplay = document.getElementById("multiplier");
multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
var incomeDisplay = document.getElementById("incomeMulti");
incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);

// upgrade variables (for multiplier)
var upgradedClickMult =1;

//for upgrades
var clickUpgrade1Cost = 500;

var mainClick = document.getElementById("main-button");

mainClick.addEventListener("click", function()
{
    money+=1*clickMult;
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    // munkys
    if (money >= 1)
    {
        document.getElementsByClassName("shop-banana")[0].style.display="block";
    }
    if (money >= 5)
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
    if (money >= 1)
    {
        document.getElementsByClassName("upgradeItem1")[0].style.display="block";
    }
});



//-----------------------------------------------------------items-----------------------------------------------------------

// banana
var bananaPickerBuy = document.getElementById("bananaButton");
bananaPickerBuy.innerText="$" + bananaCost;
bananaPickerBuy.addEventListener("click", function()
{
    if(money>bananaCost)
    {
        money -= bananaCost;
        bananaCost *=1.25;
        clickMult = clickMult + (upgradedClickMult * 0.1)
        incomeMult+=0.1;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    bananaButton.innerText="$" + roundNumber(bananaCost, 2);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
});
// munky
var munkyBuy = document.getElementById("munkyButton");
munkyBuy.innerText="$" + munkyCost;
munkyBuy.addEventListener("click", function()
{
    if(money>=munkyCost)
    {
        money-=munkyCost;
        munkyCost*=1.25;
        incomeMult+=1;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    munkyButton.innerText="$" + roundNumber(munkyCost, 1);
});
// chef munky
var chefBuy = document.getElementById("chefButton");
chefBuy.innerText="$" + chefCost;
chefBuy.addEventListener("click", function()
{
    if(money>=chefCost)
    {
        money-=chefCost;
        chefCost*=1.25;
        incomeMult+=10;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    chefButton.innerText="$" + roundNumber(chefCost, 1);
    });
// rockstar munky
var rockstarBuy = document.getElementById("rockstarButton");
rockstarBuy.innerText="$" + rockstarCost;
rockstarBuy.addEventListener("click", function()
{
    if(money>=rockstarCost)
    {
        money-=rockstarCost;
        rockstarCost*=1.25;
        incomeMult+=25;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    rockstarButton.innerText="$" + roundNumber(rockstarCost, 1);
});
// explorer munky
var explorerBuy = document.getElementById("explorerButton");
explorerBuy.innerText="$" + explorerCost;
explorerBuy.addEventListener("click", function()
{
    if(money>=explorerCost)
    {
        money-=explorerCost;
        explorerCost*=1.25;
        incomeMult+=75;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    explorerButton.innerText="$" + roundNumber(explorerCost, 1);
});
// pirate munky
var pirateBuy = document.getElementById("pirateButton");
pirateBuy.innerText="$" + pirateCost;
pirateBuy.addEventListener("click", function()
{
    if(money>=pirateCost)
    {
        money-=pirateCost;
        pirateCost*=1.25;
        incomeMult+=200;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    pirateButton.innerText="$" + roundNumber(pirateCost, 1);
});
// scientist munky
var scientistBuy = document.getElementById("scientistButton");
scientistBuy.innerText="$" + scientistCost;
scientistBuy.addEventListener("click", function()
{
    if(money>=scientistCost)
    {
        money-=scientistCost;
        scientistCost*=1.25;
        incomeMult+=1000;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    scientistButton.innerText="$" + roundNumber(scientistCost, 1);
});
// spy munky
var spyBuy = document.getElementById("spyButton");
spyBuy.innerText="$" + spyCost;
spyBuy.addEventListener("click", function()
{
    if(money>=spyCost)
    {
        money-=spyCost;
        spyCost*=1.25;
        incomeMult+=4000;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    spyButton.innerText="$" + roundNumber(spyCost, 1);
});
// ninja munky
var ninjaBuy = document.getElementById("ninjaButton");
ninjaBuy.innerText="$" + ninjaCost;
ninjaBuy.addEventListener("click", function()
{
    if(money>=ninjaCost)
    {
        money-=ninjaCost;
        ninjaCost*=1.25;
        incomeMult+=17500;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    ninjaButton.innerText="$" + roundNumber(ninjaCost, 1);
});
// robo munky
var roboBuy = document.getElementById("roboButton");
roboBuy.innerText="$" + roboCost;
roboBuy.addEventListener("click", function()
{
    if(money>=roboCost)
    {
        money-=roboCost;
        roboCost*=1.25;
        incomeMult+=50000;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    roboButton.innerText="$" + roundNumber(roboCost, 1);
});
// superhero munky
var superheroBuy = document.getElementById("superheroButton");
superheroBuy.innerText="$" + superheroCost;
superheroBuy.addEventListener("click", function()
{
    if(money>=superheroCost)
    {
        money-=superheroCost;
        superheroCost*=1.25;
        incomeMult+=200000;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    superheroButton.innerText="$" + roundNumber(superheroCost, 1);
});
// space munky
var spaceBuy = document.getElementById("spaceButton");
spaceBuy.innerText="$" + spaceCost;
spaceBuy.addEventListener("click", function()
{
    if(money>=spaceCost)
    {
        money-=spaceCost;
        spaceCost*=1.25;
        incomeMult+=1250000;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    spaceButton.innerText="$" + roundNumber(spaceCost, 1);
});


// --------- upgrades ---------
var upgrade1Buy = document.getElementById("clickUpg1");
upgrade1Buy.innerText="$" + clickUpgrade1Cost;
upgrade1Buy.addEventListener("click", function()
{
    if(money>clickUpgrade1Cost)
    {
        money -= clickUpgrade1Cost;
        clickUpgrade1Cost *=2;
        upgradedClickMult*=2;
        clickMult*=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    clickUpg1.innerText="$" + roundNumber(clickUpgrade1Cost, 2);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
});


//-----------------------------------------------------------tooltips-----------------------------------------------------------
var tooltipClass = document.getElementsByClassName("hud-tooltips")[0];
var tooltip = document.getElementById("hud-tooltip");

//banana
var bananaItem = document.getElementsByClassName("shop-banana")[0];
bananaItem.onmouseover = function() {
    tooltip.innerHTML = "This basic tool is a small mechanical device designed to pick bananas more efficiently. It's a simple and inexpensive upgrade to help you get started on your monkey-collecting journey.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "25.6%";
    tooltipClass.style.left = "30%";
};
bananaItem.onmouseout = function() {
    tooltipClass.style.display = "none";
}

//munky
var munkyItem = document.getElementsByClassName("shop-munky")[0];
munkyItem.onmouseover = function() {
    tooltip.innerHTML = "The regular munky is the quintessential munky species found in various parts of the world. These munkys are skilled climbers, using their dexterous hands and prehensile tails to navigate the treetops with ease and are known for their clever and playful nature.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "32.9%";
    tooltipClass.style.left = "30%"
}
munkyItem.onmouseout = function() {
    tooltipClass.style.display = "none";
}
