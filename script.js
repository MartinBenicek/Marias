//card color change

function change(button) {
    if (button.dataset.cond == "false"){
        button.style.filter = "grayscale(100%)";
        button.style.transitionDuration = "0.15s";
        button.dataset.cond = "true";
    }
    else {
        button.style.filter = "grayscale(0%)";
        button.dataset.cond = "false";
    }
    
};

//reset all cards

function reset(){
    var cards = document.getElementsByClassName("card"); 
    for(let i = 0; i < 32; i++){
        cards[i].style.filter = "grayscale(0%)";
        cards[i].dataset.cond = "false";
    }
}

function select(button){
    if(button.dataset.selected == "false"){
        button.style.backgroundColor = "rgb(0, 255, 0)";
        button.dataset.selected = "true";
    } else {
        button.style.backgroundColor = "rgba(228, 213, 1, 0.932)";
        button.dataset.selected = "false";
    }

    const typeHry = document.getElementsByClassName("game-mode");

    if (typeHry[3].dataset.selected === "true"){
        typeHry[0].style.backgroundColor = "rgba(228, 213, 1, 0.932)";
        typeHry[0].dataset.selected = "false";
    }
}

function calculate(){
    
}

const flek = ["Dobré", "Flek", "Re", "Tutti", "Boty", "Kalhoty", "Keiser", "Lepší", "Lepší x2"];