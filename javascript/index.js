console.log("haloooo");
/*const h1Element = document.querySelector("h1");
h1Element.textContent = "CATwalk";

const pElement = document.querySelector ("p")
/*pElement.textContent = "Mieauwww"*/

/*const button = document.querySelector("button")

function aankleden (kledingstuk){
    console.log("draagt een" + kledingstuk)
    pElement.textContent = "miauwwww"
}
/* aankleden(" rokje");
aankleden(" hoed") 

button.addEventListener('click',aankleden)
console.log("halooo");

*/

console.log("halooo");

/*hoofdeksels*/
const bloemkroon = document.querySelector("#bloemhoed");
const heksenhoed= document.querySelector(".heksenhoed");
const baretthoed= document.querySelector("#barrethoed");
const fancyhoed= document.querySelector("#fancyhoed")

/*brillen*/
const sterrenbril = document.querySelector("#sterretjesbril");
const rondebrill = document.querySelector("#rondebrilletjes");
const zonnebril = document.querySelector("#zonnebrillen");
const rozebril = document.querySelector("#fancyrozebril");

/*clothes*/
const rozejurk = document.querySelector("#jurkroze");
const regenjassen = document.querySelector("#regenjass")
const fancypak = document.querySelector("#nettepak")
const blauweoutfit = document.querySelector("#blauwejurken")






/*hoofdeksels*/
let hoedVeranderen = document.querySelector("#leeghoed");
let hoedstatus = true;

/*brillen*/
let brilVeranderen = document.querySelector("#leegbril")
let brilstatus = true

/*clothes*/
let kledingVeranderen = document.querySelector("#leegkleding")
let kledingstatus = true


/*hoofdeksels*/
function bloemknop() {
    if (hoedstatus == true) {
        hoedVeranderen.src = "plaatjes/empthyhad.png";
        hoedstatus = false;
    } else {
        hoedVeranderen.src = "plaatjes/bloemkrans.png";
        hoedstatus = true; 
    } 
}
function heksenhoedknop() {
    if (hoedstatus == true) {
        hoedVeranderen.src = "plaatjes/empthyhad.png";
        hoedstatus = false;
    } else {
        hoedVeranderen.src = "plaatjes/rodestrik.png";
        hoedstatus = true; 
    } 
}
function barretknop() {
    if (hoedstatus == true) {
        hoedVeranderen.src = "plaatjes/empthyhad.png";
        hoedstatus = false;
    } else {
        hoedVeranderen.src = "plaatjes/barret.png";
        hoedstatus = true; 
    } 
}

function fancyhoedknop() {
    if (hoedstatus == true) {
        hoedVeranderen.src = "plaatjes/empthyhad.png";
        hoedstatus = false;
    } else {
        hoedVeranderen.src = "plaatjes/fancyhoed.png";
        hoedstatus = true; 
    } 
}

/*brillen*/

function sterrenbrilknop() {
    if (brilstatus == true) {
        brilVeranderen.src = "plaatjes/empthybril.png";
        brilstatus = false;
    } else {
        brilVeranderen.src = "plaatjes/sterrenbril.png";
        brilstatus = true; 
    } 
}
function rondebrilknop() {
    if (brilstatus == true) {
        brilVeranderen.src = "plaatjes/empthybril.png";
        brilstatus = false;
    } else {
        brilVeranderen.src = "plaatjes/rondebril.png";
        brilstatus = true; 
    } 
}
function zonnebrillknop() {
    if (brilstatus == true) {
        brilVeranderen.src = "plaatjes/empthybril.png";
        brilstatus = false;
    } else {
        brilVeranderen.src = "plaatjes/zonnebril.png";
        brilstatus = true; 
    } 
}
function rozebrilknop() {
    if (brilstatus == true) {
        brilVeranderen.src = "plaatjes/empthybril.png";
        brilstatus = false;
    } else {
        brilVeranderen.src = "plaatjes/rozebril.png";
        brilstatus = true; 
    } 
}
/*clothes*/
function rozejurkknop() {
    if (kledingstatus == true) {
        kledingVeranderen.src = "plaatjes/empthyclothes.png";
        kledingstatus = false;
    } else {
        kledingVeranderen.src = "plaatjes/rozejurk.png";
        kledingstatus = true; 
    } 
}
function regenjasknop() {
    if (kledingstatus == true) {
        kledingVeranderen.src = "plaatjes/empthyclothes.png";
        kledingstatus = false;
    } else {
        kledingVeranderen.src = "plaatjes/regenjas.png";
        kledingstatus = true; 
    } 
}
function nettejasknop() {
    if (kledingstatus == true) {
        kledingVeranderen.src = "plaatjes/empthyclothes.png";
        kledingstatus = false;
    } else {
        kledingVeranderen.src = "plaatjes/nettepak.png";
        kledingstatus = true; 
    } 
}
function blauweoutfitknop() {
    if (kledingstatus == true) {
        kledingVeranderen.src = "plaatjes/empthyclothes.png";
        kledingstatus = false;
    } else {
        kledingVeranderen.src = "plaatjes/blauweoutfit.png";
        kledingstatus = true; 
    } 
}





/*hoofdeksels*/
bloemkroon.addEventListener('click', bloemknop);
heksenhoed.addEventListener('click', heksenhoedknop);
baretthoed.addEventListener('click', barretknop);
fancyhoed.addEventListener('click', fancyhoedknop);

/*brillen*/
sterrenbril.addEventListener('click', sterrenbrilknop);
rondebrill.addEventListener('click', rondebrilknop);
zonnebril.addEventListener('click',zonnebrillknop)
rozebril.addEventListener('click',rozebrilknop);

/*clothes*/
rozejurk.addEventListener('click',rozejurkknop);
regenjassen.addEventListener('click',regenjasknop);
fancypak.addEventListener('click',nettejasknop);
blauweoutfit.addEventListener('click',blauweoutfitknop);








