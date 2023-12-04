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