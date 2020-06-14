
//AudioDateien Einbindung inspiriert von  Angabe im PreFace var sound(:HTMLAudioElement) = new Audio('sample.mp3') nach einiger Zeit und nachsehen bei anderen, zwecks Typen Darstellung im Bsp PreFace :> Hoffe, der Beat macht dich nicht wahnsinnig.

var s0 = new Audio ("A.mp3");
var s1 = new Audio ("C.mp3");
var s2 = new Audio ("F.mp3");
var s3 = new Audio ("G.mp3");
var s4 = new Audio ("hihat.mp3");
var s5 = new Audio ("kick.mp3");
var s6 = new Audio ("laugh-1.mp3");
var s7 = new Audio ("laugh-2.mp3");
var s8 = new Audio ("snare.mp3");

var sounds = [s0,s1,s2,s3,s4,s5,s6,s7,s8];

//Spiele Audiodateien 'PlaySample'
function PlaySample (sound){
    sounds[sound].play();
}

window.addEventListener("load", function () {
    document.querySelector("#b1")?.addEventListener("click", function () {PlaySample(0);});
    document.querySelector("#b2")?.addEventListener("click", function () {PlaySample(1);});
    document.querySelector("#b3")?.addEventListener("click", function () {PlaySample(2);});
    document.querySelector("#b4")?.addEventListener("click", function () {PlaySample(3);});
    document.querySelector("#b5")?.addEventListener("click", function () {PlaySample(4);});
    document.querySelector("#b6")?.addEventListener("click", function () {PlaySample(5);});
    document.querySelector("#b7")?.addEventListener("click", function () {PlaySample(6);});
    document.querySelector("#b8")?.addEventListener("click", function () {PlaySample(7);});
    document.querySelector("#b9")?.addEventListener("click", function () {PlaySample(8);});
});
function beat() {
setInterval(function() {
    
    PlaySample(5);
    PlaySample(5);
    PlaySample(8);
    PlaySample(5);
    PlaySample(4);
    PlaySample(5);
    
   }, 195);
}
window.addEventListener("load", function () {
   document.querySelector(".play")?.addEventListener("click", beat);
});