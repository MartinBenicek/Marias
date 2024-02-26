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
            console.log("sa");
        }
    }
}

const hraButtonColorChange = new changeColor(hraButton, [betlButton, durchButton]);
const sedmaButtonColorChange = new changeColor(sedmaButton, [betlButton, durchButton]);
const kiloButtonColorChange = new changeColor(kiloButton, [betlButton, durchButton]);
const betlButtonColorChange = new changeColor(betlButton, [hraButton, sedmaButton, kiloButton, durchButton, vSrdcichButton]);
const durchButtonColorChange = new changeColor(durchButton, [hraButton, sedmaButton, kiloButton, betlButton, vSrdcichButton]);
const vSrdcichButtonColorChange = new changeColor(vSrdcichButton, [betlButton, durchButton]);

//hraButton.onclick()

function calculate(){
    let gameArray = [hraButton, sedmaButton, kiloButton, betlButton, durchButton, vSrdcichButton]
    for(let i = 0; i < gameArray.length; i++){
        let tmp = gameArray[i].getAttribute("data-selected");
        tmp = parseInt(tmp, 2);
        console.log(tmp);
        gameArray[i] = tmp;
    }
    console.log(gameArray);
}