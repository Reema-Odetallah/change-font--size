function mag(){
    document.querySelector("p").classList.add("magnification");
    document.querySelector("h2").classList.add("magnification");
    document.querySelector("p").classList.remove("shrink");
    document.querySelector("h2").classList.remove("shrink");
}
function shr(){
    document.querySelector("p").classList.add("shrink");
    document.querySelector("h2").classList.add("shrink");
    document.querySelector("p").classList.remove("magnification");
    document.querySelector("h2").classList.remove("magnification");
    
}
document.querySelector(".magBtn").onclick=mag;
document.querySelector(".shrBtn").onclick=shr;
