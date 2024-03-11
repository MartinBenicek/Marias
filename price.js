const hraButton = document.getElementById("Hra");
const sedmaButton = document.getElementById("Sedma");
const kiloButton = document.getElementById("Kilo");
const betlButton = document.getElementById("Betl");
const durchButton = document.getElementById("Durch");
const vSrdcichButton = document.getElementById("V-srdcich");


class changeColor {
    constructor(button, buttonToTurnOff = []) {
        this.button = button;
        this.buttonToTurnOff = buttonToTurnOff;
        this.toggleColor();
        this.showFunctions();
    }

    toggleColor() {
        this.button.addEventListener("click", () => {
            this.buttonToTurnOff.forEach(btn => {
                btn.setAttribute("data-selected", "false");
            });
            let getAttribute = this.button.getAttribute("data-selected");
            getAttribute = getAttribute === "true";
            getAttribute = !getAttribute;
            this.button.setAttribute("data-selected", getAttribute.toString());
        });
    }

    showFunctions(){
        const hraDivFunc = document.getElementById("Hra-div-functions");
        if (this.button == hraButton){
        }
    }
}

const hraButtonColorChange = new changeColor(hraButton, [betlButton, durchButton]);
const sedmaButtonColorChange = new changeColor(sedmaButton, [betlButton, durchButton]);
const kiloButtonColorChange = new changeColor(kiloButton, [betlButton, durchButton]);
const betlButtonColorChange = new changeColor(betlButton, [hraButton, sedmaButton, kiloButton, durchButton, vSrdcichButton]);
const durchButtonColorChange = new changeColor(durchButton, [hraButton, sedmaButton, kiloButton, betlButton, vSrdcichButton]);
const vSrdcichButtonColorChange = new changeColor(vSrdcichButton, [betlButton, durchButton]);

function getData(){
    const hraFlekData = document.querySelector("#Hra-flek");
    const sedmaFlekData = document.querySelector("#Sedma-flek");
    const kiloFlekData = document.querySelector("#Kilo-flek");
    const betlFlekData = document.querySelector("#Betl-flek");
    const durchFlekData = document.querySelector("#Durch-flek");
    const hlasenaSedma = document.querySelector("#hlasena-sedma");
    const hlaseneKilo = document.querySelector("#hlasene-kilo");
    const povinnostHra = document.querySelector("#povinnost-Hra").checked;
    const povinnostSedma = document.querySelector("#povinnost-Sedma").checked;
    const povinnostKilo = document.querySelector("#povinnost-Kilo").checked;
    const povinnostBetl = document.querySelector("#povinnost-Betl").checked;
    const povinnostDurch = document.querySelector("#povinnost-Durch").checked;
    const obranaHra = document.querySelector("#obrana-Hra").checked;
    const obranaSedma = document.querySelector("#obrana-Sedma").checked;
    const obranaKilo = document.querySelector("#obrana-Kilo").checked;
    const obranaBetl = document.querySelector("#obrana-Betl").checked;
    const obranaDurch = document.querySelector("#obrana-Durch").checked;

    let gameArray = [
    {buttonData: hraButton, flekData: hraFlekData, statusInfo: null, flekInfo: null, winner: [povinnostHra, obranaHra], price: 1}, 
    {buttonData: sedmaButton, flekData: sedmaFlekData, hlasenaData: hlasenaSedma,
        statusInfo: null, flekInfo: null, hlasenaInfo: null, winner: [povinnostSedma, obranaSedma], price: 2}, 
    {buttonData: kiloButton, flekData: kiloFlekData, hlasenaData: hlaseneKilo,
        statusInfo: null, flekInfo: null, hlasenaInfo: null, winner: [povinnostKilo, obranaKilo], price: 2}, 
    {buttonData: betlButton, flekData: betlFlekData, statusInfo: null, flekInfo: null, winner: [povinnostBetl, obranaBetl], price: 5}, 
    {buttonData: durchButton, flekData: durchFlekData, statusInfo: null, flekInfo: null, winner: [povinnostDurch, obranaDurch], price: 10}, 
    {buttonData: vSrdcichButton, statusInfo: null}
    ];

    for(let i = 0; i < gameArray.length; i++){
        let statusTmp = gameArray[i].buttonData.getAttribute("data-selected");
        if(statusTmp === "false"){
            continue;
        }
        gameArray[i].statusInfo = statusTmp;
        if(gameArray[i].buttonData !== vSrdcichButton){
            let flekTmp = gameArray[i].flekData.value;
            gameArray[i].flekInfo = flekTmp;
        }
        if(gameArray[i].hasOwnProperty("hlasenaData")){
            gameArray[i].hlasenaInfo = gameArray[i].hlasenaData.checked;
        }
    }
    return gameArray;
}

function priceCalculation(data){
    let povinnostPrice = 0;
    let obranaPrice = 0;
    for(let i = 0; i < data.length - 1; i++){
        let tmp = data[i].statusInfo;
        let tmpPrice;
        if(tmp === null){
            continue;
        }
        tmpPrice = data[i].price * Math.pow(2, data[i].flekInfo);
        if(data[i].hasOwnProperty("hlasenaData") && data[i].hlasenaInfo === true){
            tmpPrice = tmpPrice * 2;
        }
        if(data[i].winner[0] === true && data[i].winner[1] === false){
            povinnostPrice += tmpPrice;
        } else if (data[i].winner[0] === false && data[i].winner[1] === true){
            obranaPrice += tmpPrice;
        }
    }
    let finalPrice = povinnostPrice - obranaPrice;
    if(data[5].statusInfo === "true"){
        finalPrice = finalPrice * 2;
    }
    if(finalPrice > 0){
        console.log("Povinnost dostává " + finalPrice + " od každého");
    } else if (finalPrice === 0){
        console.log("Je to remíza");
    } else{
        finalPrice = finalPrice * (-1);
        console.log("Povinnost dává " + finalPrice + " každému");
    }
}

function calculate(){
    const getInfoData = getData();
    priceCalculation(getInfoData);
}