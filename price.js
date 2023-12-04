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
}

const hraButtonColorChange = new changeColor(hraButton, [betlButton, durchButton]);
const sedmaButtonColorChange = new changeColor(sedmaButton, [betlButton, durchButton]);
const kiloButtonColorChange = new changeColor(kiloButton, [betlButton, durchButton]);
const betlButtonColorChange = new changeColor(betlButton, [hraButton, sedmaButton, kiloButton, durchButton, vSrdcichButton]);
const durchButtonColorChange = new changeColor(durchButton, [hraButton, sedmaButton, kiloButton, betlButton, vSrdcichButton]);
const vSrdcichButtonColorChange = new changeColor(vSrdcichButton, [betlButton, durchButton]);

function calculate(){
    
}

const flek = ["Dobré", "Flek", "Re", "Tutti", "Boty", "Kalhoty", "Keiser", "Lepší", "Lepší x2"];