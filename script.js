// ==========================
// FORCE PAGE SWITCHING
// ==========================
function hideAllPages(){
    document.getElementById("home-page").style.display = "none";
    document.getElementById("adoption-page").style.display = "none";
    document.getElementById("lost-page").style.display = "none";
}

function showMain(page){
    hideAllPages();
    document.getElementById(page + "-page").style.display = "flex";
}

function goHome(){
    hideAllPages();
    document.getElementById("home-page").style.display = "flex";
}

function showAdoption(type){
    document.getElementById("animal-form").style.display = "none";
    document.getElementById("owner-form").style.display = "none";

    document.getElementById(type + "-form").style.display = "block";
}

function showLost(type){
    document.getElementById("missing-form").style.display = "none";
    document.getElementById("found-form").style.display = "none";

    document.getElementById(type + "-form").style.display = "block";
}
