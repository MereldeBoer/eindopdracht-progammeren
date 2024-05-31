
/*hoofdeksels: de knoppen waar je op druk om de hoeden te veranderen (ze zijn const omdat de knop zelf niet veranderd)*/

const bloemenkrans= document.querySelector("#bloemhoed");
const heksenhoed= document.querySelector(".heksenhoed");
const baretthoed= document.querySelector("#barrethoed");
const fancyhoed= document.querySelector("#fancyhoed")

/*brillen: de knoppen waar je op druk om te brillen te veranderen*/
const sterrenbril = document.querySelector("#sterretjesbril");
const rondebrill = document.querySelector("#rondebrilletjes");
const zonnebril = document.querySelector("#zonnebrillen");
const rozebril = document.querySelector("#fancyrozebril");

/*clothes: de knoppen waar je op druk om te kleding te veranderene*/
const rozejurk = document.querySelector("#jurkroze");
const regenjassen = document.querySelector("#regenjass")
const fancypak = document.querySelector("#nettepak")
const blauweoutfit = document.querySelector("#blauwejurken")

/*kettingen: de knoppen waar je op druk om de accessoires te veranderen*/
const sterhanger = document.querySelector("#sterhangers");
const sjaal = document.querySelector("#francesjaal");
const parels = document.querySelector("#parelketting");
const strik = document.querySelector("#fancystrik");

/*dobbelsteen: de dobbelsteen knop om de kat random outfits te geven*/
const dobbelsteen = document.querySelector("#dobbeljava");

/*audio: koppelen van muziek met java script
bron: https://www.youtube.com/watch?v=cDxzpUCvBGI 
onderzoek bron: https://stackoverflow.com/questions/9419263/how-to-play-audio*/

const audio = document.getElementById('myAudio');
const lijstkleding = ['plaatjes/outfit1.png','plaatjes/outfit2.png', 'plaatjes/outfit3.png', 'plaatjes/outfit4.png']





/*hoofdeksels: plaatje van de hoed die later wordt veranderd naar een andere hoed ( zijn let om dat het plaatje gaat veranderen) en true fals ekan worden*/
let hoedVeranderen = document.querySelector("#leeghoed");
let hoedstatus = true;

/*brillen: plaatje van de bril die later veranderd naar een andere bril*/
let brilVeranderen = document.querySelector("#leegbril")
let brilstatus = true

/*clothes: plaatje van kleding die later veranderd naar een andere plaatje van kleding*/
let kledingVeranderen = document.querySelector("#leegkleding")
let kledingstatus = true

/*kettingen: plaatje van ketting die later veranderd naar een andere plaatje van een ketting*/
let kettingVeranderen = document.querySelector("#leegketting")
let kettingstatus = true

/*dobbelsteen: plaatje die je met behulp van de dobbelsteen random veranderd - en array van de lijst met welke kleding de kat willekeurig in kan verandren*/
let dobbelsteenVeranderen = document.querySelector("#dobbelsteenkat")
let randomstate = true
let willekeurigeIndex;



/*de h1 tekst die ik wil veranderen na aantal secondes*/
let h1tekst = document.querySelector("#h1E");






/*hoofdeksels: function om er voor te zorgen dat wanneer je op een afbeelding klikt een plaatje veranderd naar een ander plaatje*/
function bloemenknop() {
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

/*brillen: function om er voor te zorgen dat wanneer je op een afbeelding klikt een plaatje veranderd naar een ander plaatje*/

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
/*clothes: function om er voor te zorgen dat wanneer je op een afbeelding klikt een plaatje veranderd naar een ander plaatje*/
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

/*kettingen: function om er voor te zorgen dat wanneer je op een afbeelding klikt een plaatje veranderd naar een ander plaatje*/
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
/*dobbelsteen: functie om er voor te zorgen dat wanneer je om de plaatje van de dobbelsteen klikt de kat op een random volgorde kleding aandoet*/

/*om de plaatjes random te veranderen heb ik research gedaan op internet en heeft chatgpt me geholpen met het te begrijpen*/
function veranderOutfit() {
    if (randomstate) {
        willekeurigeIndex = Math.floor(Math.random() * lijstkleding.length);
        dobbelsteenVeranderen.src = lijstkleding[willekeurigeIndex];
    }
}
/*audio: functie om er voor te zorgen dat er na zoveel secondes een muziekje afspeelt en de tekst catwalk veranderd naar dance break*/

function dancebreak() {
    h1tekst.textContent = "Dancebreak";
    audio.play();

}
/*geeft aan na hoeveel tijd de functie dancebreak wordt toegepast*/

setTimeout(dancebreak, 20000); 




/*hoofdeksels: roept functie aan om plaatje te veranderen wannneer je ergens op klikt*/
bloemenkrans.addEventListener('click', bloemenknop);
heksenhoed.addEventListener('click', heksenhoedknop);
baretthoed.addEventListener('click', barretknop);
fancyhoed.addEventListener('click', fancyhoedknop);

/*brillen: roept functie aan om plaatje te veranderen wannneer je ergens op klikt*/
sterrenbril.addEventListener('click', sterrenbrilknop);
rondebrill.addEventListener('click', rondebrilknop);
zonnebril.addEventListener('click',zonnebrillknop)
rozebril.addEventListener('click',rozebrilknop);

/*clothes: roept functie aan om plaatje te veranderen wannneer je ergens op klikt*/
rozejurk.addEventListener('click',rozejurkknop);
regenjassen.addEventListener('click',regenjasknop);
fancypak.addEventListener('click',nettejasknop);
blauweoutfit.addEventListener('click',blauweoutfitknop);

/*kettingen: roept functie aan om plaatje te veranderen wannneer je ergens op klikt*/
sterhanger.addEventListener('click',sterkettingknop);
sjaal.addEventListener('click',sjaalknop);
parels.addEventListener('click',parelsknop);
strik.addEventListener('click',strikknop);

/*dobbelsteen: roept functie aan om plaatje te veranderen wannneer je ergens op klikt*/
dobbelsteen.addEventListener("click", veranderOutfit);









