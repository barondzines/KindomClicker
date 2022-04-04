import * as utils from "./utils.js";
import * as monsterData from "./monsterUtils.js";
import * as dice from "./diceBag.js";

//DOM Classes
const clickHeading = document.querySelector("#money-heading");
const questBtn = document.querySelector("#quest-btn");
const autoClickerBtn = document.querySelector("#purch-click-btn");

//Message Box 
const messageContainer = document.querySelector(".msg-box")
const messageBody = document.querySelector(".msg");
const messageClose = document.querySelector(".close-btn");
let messageCloseTimeout = null;

//Game Variables
let gold = 0;
let cost = 5;
let autoClickerLive = false;
let clickPerSecond = 5;

//Even Listeners
questBtn.addEventListener("click", async function() {
    let goldEarned = utils.getRandomNumber(1, 5);
    let monster = await monsterData.getMonsterName();
    console.log('role20', dice.die20());
    gold += goldEarned;
    messageBox(`You fought and killed a ${monster} and earned ${goldEarned} gold`);
    clickHeading.innerHTML = `Gold: ${gold}`;
})

autoClickerBtn.addEventListener("click", () => {
    if (gold > cost) {
        gold -= cost;
        autoClickerLive = true;
        clickHeading.innerHTML = `gold: ${gold}`;

    } else {
        console.log('Need More gold')
    }
})

let autoClicker = () => {
    gold += clickPerSecond;
    clickHeading.innerHTML = `gold: ${gold}`;
}

//Message Box Window
messageClose.addEventListener("click", () => {
    if (messageContainer.classList.contains("show")) {
        messageContainer.classList.remove("show");
        messageContainer.classList.add("hide");
    }
})

let setMessageCloseTimeout = () => {
    messageCloseTimeout = setTimeout(function() {
        messageContainer.classList.remove("show");
        messageContainer.classList.add("hide");
    }, 3000)
}

let messageBox = (message) => {
    if (messageContainer.classList.contains("hide")) {
        messageContainer.classList.add("show");
        messageContainer.classList.remove("hide");
        messageBody.innerHTML = message;
        setMessageCloseTimeout();

    } else if (messageContainer.classList.contains("show")) {
        messageBody.innerHTML = message;
        if (messageCloseTimeout) {
            clearTimeout(messageCloseTimeout);
            messageCloseTimeout = null;
        }

        setMessageCloseTimeout();

    }
}

//Game Loop happens every second
window.setInterval(function() {

    if (autoClickerLive) {
        console.log('time to auto click');
        autoClicker();
    }

}, 1000)