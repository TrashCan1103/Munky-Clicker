
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
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
}
//let screenWidth = document.getElementsByClassName("main")[0].offsetHeight;
//let screenHeight = document.getElementsByClassName("main")[0].offsetWidth;
let screenWidth = screen.width;
let screenHeight = screen.height;
var zeros;
var simpMoney;
var intervalID = window.setInterval(moneyIncome, 10);
var money = 0;
var clickMult = 1;
var incomeMult = 0;
var bananaCost = 5;
var munkyCost = 25;
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



// upgrade variables (for multiplier)
var upgradedClickMult =1;





//for upgrades






var clickUpgrade1Cost = 500;
var upgrade1Count = 0;

var munkyUpgrade2Cost = 2000;
var upgrade2Count = 0;

var munkyUpgrade3Cost = 7500;
var upgrade3Count = 0;

var munkyUpgrade4Cost = 20000;
var upgrade4Count = 0;






// main button

var mainClick = document.getElementById("main-button");

mainClick.addEventListener("click", function()
{
    money+=1*clickMult;
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);
    
    
    //money thing
    var money_thing = document.createElement("div");
    money_thing.style.zIndex = "999";
    money_thing.classList.add("click-score");
    money_thing.textContent = "+" + simplify(clickMult);
    var divWidth = money_thing.clientWidth;
    var divHeight = 40;
    money_thing.style.display = "block";
    money_thing.style.top = (event.clientY - divHeight) + "px";
    money_thing.style.left = (event.clientX - divWidth/10) + "px";
    document.body.appendChild(money_thing);
    setTimeout(() => {
        money_thing.style.display = "none";
        money_thing.remove();
    }, 2000);
    
    
    
    
    
    
    
    
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
});



//-----------------------------------------------------------items-----------------------------------------------------------

// banana

var bananaPickerBuy = document.getElementById("bananaButton");
bananaPickerBuy.innerText="$" + bananaCost;
bananaPickerBuy.addEventListener("click", function()
{
    if(money>bananaCost)
    {
        bananaCount++;
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
munkyBuy.innerText="$" + simplify(munkyCost);
munkyBuy.addEventListener("click", function()
{
    if(money>=munkyCost)
    {
        munkyCount++;
        money-=munkyCost;
        munkyCost*=1.25;
        incomeMult+=munkyMoneyValue;
        munkyMoney+=munkyMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + simplify(incomeMult);
    munkyBuy.innerText="$" + simplify(munkyCost);
});
// chef munky
var chefBuy = document.getElementById("chefButton");
chefBuy.innerText="$" + simplify(chefCost);
chefBuy.addEventListener("click", function()
{
    if(money>=chefCost)
    {
        chefCount++;
        money-=chefCost;
        chefCost*=1.25;
        incomeMult+=chefMoneyValue;
        chefMoney+=chefMoneyValue;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
    }
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    chefBuy.innerText="$" + simplify(chefCost);
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
        incomeMult+=rockstarMoneyValue;
        rockstarMoney+=rockstarMoneyValue;
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
    spyButton.innerText="$" + simplify(spyCost);
});
// ninja munky
var ninjaBuy = document.getElementById("ninjaButton");
ninjaBuy.innerText="$" + simplify(ninjaCost);
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
    ninjaButton.innerText="$" + simplify(ninjaCost);
});
// robo munky
var roboBuy = document.getElementById("roboButton");
roboBuy.innerText="$" + simplify(roboCost);
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
    roboButton.innerText="$" + simplify(roboCost);
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


// ------------------------------------------------------ upgrades -------------------------------------------------------

// upgrade #1 (click upgrade 1)

var upgrade1Buy = document.getElementById("clickUpg1");
var upgrade1Class = document.getElementsByClassName("upgradeItem1")[0];
upgrade1Buy.innerText="$" + clickUpgrade1Cost;
upgrade1Buy.addEventListener("click", function()
{
    if(money>clickUpgrade1Cost)
    {   
        upgrade1Count++;
        money -= clickUpgrade1Cost;
        upgradedClickMult*=2;
        clickMult*=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade1Class.style.display = "none";
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    clickUpg1.innerText="$" + roundNumber(clickUpgrade1Cost, 2);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    }
});
// upgrade #2 (munky upgrade 1)

var upgrade2Buy = document.getElementById("munkyUpg2");
var upgrade2Class = document.getElementsByClassName("upgradeItem2")[0];
upgrade2Buy.innerText="$" + munkyUpgrade2Cost;
upgrade2Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade2Cost)
    {   
        upgrade2Count++;
        money -= munkyUpgrade2Cost;
        incomeMult = incomeMult + munkyMoney;
        munkyMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade2Class.style.display = "none";
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    munkyUpg2.innerText="$" + roundNumber(munkyUpgrade2Cost, 2);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    }
});


// upgrade #3 (chef munky 1)

var upgrade3Buy = document.getElementById("munkyUpg3");
var upgrade3Class = document.getElementsByClassName("upgradeItem3")[0];
upgrade3Buy.innerText="$" + munkyUpgrade3Cost;
upgrade3Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade3Cost)
    {   
        upgrade3Count++;
        money -= munkyUpgrade3Cost;
        incomeMult = incomeMult + chefMoney;
        chefMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade3Class.style.display = "none";
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    munkyUpg3.innerText="$" + roundNumber(munkyUpgrade3Cost, 2);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    }
});

// upgrade #4 (rockstar munky 1)(comment written by xreqs not trashycan who sux at rocket league not even gc smh)

var upgrade4Buy = document.getElementById("munkyUpg4");
var upgrade4Class = document.getElementsByClassName("upgradeItem4")[0];
upgrade4Buy.innerText="$" + munkyUpgrade4Cost;
upgrade4Buy.addEventListener("click", function()
{
    if(money>munkyUpgrade4Cost)
    {   
        upgrade4Count++;
        money -= munkyUpgrade4Cost;
        incomeMult = incomeMult + rockstarMoney;
        rockstarMoneyValue *=2;
        clearInterval(intervalID);
        intervalID = window.setInterval(moneyIncome, 10);
        upgrade4Class.style.display = "none";
    countDisplay.innerHTML = "Current Money: $" + simplify(money);
    munkyUpg4.innerText="$" + roundNumber(munkyUpgrade4Cost, 2);
    multDisplay.innerHTML = "Click Multiplier: " + simplify(clickMult);
    incomeDisplay.innerHTML = "Money per second: " + roundNumber(incomeMult,1);
    }
});

//-----------------------------------------------------------tooltips-----------------------------------------------------------
/*















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
//chefMonkey
var chefItem = document.getElementsByClassName("shop-chef-munky")[0]
chefItem.onmouseover = function(){
    tooltip.innerHTML = "Wearing chef hats and aprons, these munkys are culinary experts. They can whip up delicious dishes and are the go-to chefs in the animal kingdom.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "32.9%";
    tooltipClass.style.left = "30%"
}
chefItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}
var rockstarItem = document.getElementsByClassName("shop-chef-munky")[0]

//rockstar monkey popup

var rockstarItem = document.getElementsByClassName("shop-rockstar-munky")[0]
rockstarItem.onmouseover = function(){
    tooltip.innerHTML = "These munkys love to play musical instruments and perform on stage. They are often seen with electric guitars, drums, and flamboyant outfits, entertaining crowds with their music.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "50%";
    tooltipClass.style.left = "30%"
}

rockstarItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}

//explorer monkey popup

var explorerItem = document.getElementsByClassName("shop-explorer-munky")[0]
explorerItem.onmouseover = function(){
    tooltip.innerHTML = "These adventurous munkys are always ready for expeditions to discover new lands and species. They carry maps, compasses, and backpacks as they embark on exciting journeys.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "55%";
    tooltipClass.style.left = "30%"
}
explorerItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}
//pirate monkey popup
var pirateItem = document.getElementsByClassName("shop-pirate-munky")[0]
pirateItem.onmouseover = function(){
    tooltip.innerHTML = "Dressed in pirate attire, these munkys are known for their love of adventure and treasure hunting. They're often seen with a tiny eyepatch and a miniature cutlass.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "60%";
    tooltipClass.style.left = "30%"
}
pirateItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}

var scientistItem = document.getElementsByClassName("shop-scientist-munky")[0]
scientistItem.onmouseover = function(){
    tooltip.innerHTML = "Wearing lab coats and glasses, these munkys are known for their scientific curiosity. They conduct experiments and research, contributing to breakthrough discoveries in various fields.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "70%";
    tooltipClass.style.left = "30%"
}
scientistItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}
var spyItem = document.getElementsByClassName("shop-spy-munky")[0]
spyItem.onmouseover = function(){
    tooltip.innerHTML = "These munkys are experts at gathering information discreetly. They have tiny gadgets and are skilled in espionage, making them valuable assets for intelligence agencies.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "80%";
    tooltipClass.style.left = "30%"
}
spyItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}
var ninjaItem = document.getElementsByClassName("shop-ninja-munky")[0]
ninjaItem.onmouseover = function(){
    tooltip.innerHTML = "These agile and stealthy munkys are trained in the art of ninjitsu. They can scale walls, move silently, and are skilled in hand-to-hand combat, making them perfect for covert missions.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "90%";
    tooltipClass.style.left = "30%"
}
ninjaItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}

var roboItem = document.getElementsByClassName("shop-robo-munky")[0]
roboItem.onmouseover = function(){
    tooltip.innerHTML = "These munkys are part biological and part robotic, equipped with cybernetic enhancements that give them enhanced strength and agility. They are often used in advanced scientific research and as assistants for physically demanding tasks.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "93%";
    tooltipClass.style.left = "30%"
}
roboItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}

var superheroItem = document.getElementsByClassName("shop-superhero-munky")[0]
superheroItem.onmouseover = function(){
    tooltip.innerHTML = "With capes and special powers, these munkys are the defenders of justice. They use their extraordinary abilities to fight crime and protect the innocent.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "95%";
    tooltipClass.style.left = "30%"
}
superheroItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}

var spaceItem = document.getElementsByClassName("shop-space-munky")[0]
spaceItem.onmouseover = function(){
    tooltip.innerHTML = "These munkys have been specially trained to live and thrive in the extreme conditions of outer space. They wear astronaut suits and can operate spacecraft, making them essential for space missions.";
    tooltipClass.style.display = "flex";
    tooltipClass.style.top = "98%";
    tooltipClass.style.left = "30%"
}
spaceItem.onmouseout = function(){
    tooltipClass.style.display = "none";
}
*/

//styling
/*
var hudTop = document.getElementsByClassName("hud-top")[0];
hudTop.style.left = 55.5 + (0.3*screenWidth)+"px";
hudTop.style.right = 55.5 + (0.3*screenWidth)+"px";
*/
var hudLeft = document.getElementsByClassName("hud-left")[0];
var shopTop = document.getElementsByClassName("shop-top")[0];
shopTop.style.width = (hudLeft.clientWidth)-40+"px";

var shop = document.getElementsByClassName("shop")[0];
shop.style.height = (0.86*hudLeft.clientHeight)-80+"px";
shop.style.width = (hudLeft.clientWidth)-40+"px";

var menu = document.getElementsByClassName("menu")[0];
menu.style.width = (hudLeft.clientWidth)-40+"px";

var upgradesTop = document.getElementsByClassName("upgrades-top")[0];
upgradesTop.style.width = (hudLeft.clientWidth)-40+"px";

var upgrades = document.getElementsByClassName("upgrades")[0];
upgrades.style.height = (0.86*hudLeft.clientHeight)-80+"px";
upgrades.style.width = (hudLeft.clientWidth)-40+"px";

var socials = document.getElementsByClassName("socials")[0];
socials.style.width = (hudLeft.clientWidth)-40+"px";

