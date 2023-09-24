class all_in_one{
    typHry(counter) {
        const show = document.getElementById("Typ");

        if (counter > 0){
            show.value = typ[counter];
        } else if (counter < 0){
            show.value = typ[typ.length + counter];
        } else {
            show.value = typ[counter];
        }
    }

    typFleku(counter){
        const show = document.getElementById("Fleky");

        if (counter > 0){
            show.value = flek[counter];
        } else if (counter < 0){
            show.value = flek[flek.length + counter];
        } else {
            show.value = flek[counter];
        }
    }
}

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


function choice(button){
    let info;

    if (button.dataset.type === "first"){
        info = document.getElementById("Typ");
    } else if (button.dataset.type === "second"){
        info = document.getElementById("Fleky");
    }
    return info
}

function front(button){
    let info = choice(button);
    
    let counter = parseInt(info.dataset.counter, 10);
    let countermax = parseInt(info.dataset.countermax, 10);

    if (counter < countermax){
        counter++;
    } else {
        counter = 0;
    }

    if (info.id === "Typ"){
        Hra.typHry(counter)
    } else if(info.id === "Fleky"){
        Hra.typFleku(counter)
    }
    
    
    info.dataset.counter = counter.toString();
}

function previous(button){
    let info = choice(button);
    
    let counter = parseInt(info.dataset.counter, 10);
    let countermax = parseInt(info.dataset.countermax, 10);

    if (counter > -countermax){
        counter--;
    } else {
        counter = 0;
    }
    
    if (info.id === "Typ"){
        Hra.typHry(counter)
    } else if(info.id === "Fleky"){
        Hra.typFleku(counter)
    }
    
    info.dataset.counter = counter.toString();
}

function calculate(){
    
}

const typ = ["Hra", "Sedma", "Stovka", "StoSedum", "Betl", "Durch"];
const flek = ["Dobré", "Flek", "Re", "Tutti", "Boty", "Kalhoty", "Keiser", "Lepší", "Lepší x2"];
let Hra = new all_in_one();