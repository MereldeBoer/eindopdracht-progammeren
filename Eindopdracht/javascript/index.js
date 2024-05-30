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

/ Verwijzingen naar het h1 element en het audio element
var header = document.getElementById('myHeader');
var audio = document.getElementById('myAudio');

// Functie om de tekst te veranderen en het audiobestand af te spelen
function changeTextAndPlayMusic() {
    header.textContent = 'Nieuwe Tekst';
    audio.play();
}

// Stel de interval in om de functie na 30 seconden uit te voeren
setTimeout(changeTextAndPlayMusic, 30000); // 30000 milliseconden = 30 seconden

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

/*kettingen*/
const sterhanger = document.querySelector("#sterhangers");
const sjaal = document.querySelector("#francesjaal");
const parels = document.querySelector("#parelketting");
const strik = document.querySelector("#fancystrik");

/*dobbelsteen*/
const dobbelsteen = document.querySelector("#dobbeljava");












/*hoofdeksels*/
let hoedVeranderen = document.querySelector("#leeghoed");
let hoedstatus = true;

/*brillen*/
let brilVeranderen = document.querySelector("#leegbril")
let brilstatus = true

/*clothes*/
let kledingVeranderen = document.querySelector("#leegkleding")
let kledingstatus = true

/*kettingen*/
let kettingVeranderen = document.querySelector("#leegketting")
let kettingstatus = true

/*dobbelsteen*/
let dobbelsteenVeranderen = document.querySelector("#dobbelsteenkat")
let randomstate = true
let lijstkleding = ['plaatjes/outfit1.png','plaatjes/outfit2.png', 'plaatjes/outfit3.png', 'plaatjes/outfit4.png']


/*audio*/
let audio = document.getElementById('myAudio');
audio.play()

let h1tekst = document.querySelector("#h1E");






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

/*kettingen*/
function sterkettingknop() {
    if (kettingstatus == true) {
        kettingVeranderen.src = "plaatjes/ampthyketting.png";
        kettingstatus = false;
    } else {
        kettingVeranderen.src = "plaatjes/sterket.png";
        kettingstatus = true; 
    } 
}
function sjaalknop() {
    if (kettingstatus == true) {
        kettingVeranderen.src = "plaatjes/ampthyketting.png";
        kettingstatus = false;
    } else {
        kettingVeranderen.src = "plaatjes/rozesjaal.png";
        kettingstatus = true; 
    } 
}
function parelsknop() {
    if (kettingstatus == true) {
        kettingVeranderen.src = "plaatjes/ampthyketting.png";
        kettingstatus = false;
    } else {
        kettingVeranderen.src = "plaatjes/parelketting.png";
        kettingstatus = true; 
    } 

}
function strikknop() {
    if (kettingstatus == true) {
        kettingVeranderen.src = "plaatjes/ampthyketting.png";
        kettingstatus = false;
    } else {
        kettingVeranderen.src = "plaatjes/fancystrik.png";
        kettingstatus = true; 
    } 
}
/*dobbelsteen*/

function veranderOutfit() {
    if (randomstate) {
        const randomIndex = Math.floor(Math.random() * lijstkleding.length);
        dobbelsteenVeranderen.src = lijstkleding[randomIndex];
    }
 
}
/*audio*/

function dancebreak() {
    h1tekst.textContent = "Dancebreak";
    audio.play();

}



setTimeout(dancebreak, 60000); 











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

/*kettingen*/
sterhanger.addEventListener('click',sterkettingknop);
sjaal.addEventListener('click',sjaalknop);
parels.addEventListener('click',parelsknop);
strik.addEventListener('click',strikknop);

/*dobbelsteen*/
dobbelsteen.addEventListener("click", veranderOutfit);

/*audio*/
let







