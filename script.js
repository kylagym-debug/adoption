function showMain(page){
    document.getElementById("home-page").classList.add("hidden");
    document.getElementById(page + "-page").classList.remove("hidden");
}

function goHome(){
    document.getElementById("home-page").classList.remove("hidden");
    document.getElementById("adoption-page").classList.add("hidden");
    document.getElementById("lost-page").classList.add("hidden");
}

function showAdoption(type){
    document.getElementById("animal-form").classList.add("hidden");
    document.getElementById("owner-form").classList.add("hidden");
    document.getElementById(type + "-form").classList.remove("hidden");
}

function showLost(type){
    document.getElementById("missing-form").classList.add("hidden");
    document.getElementById("found-form").classList.add("hidden");
    document.getElementById(type + "-form").classList.remove("hidden");
}
