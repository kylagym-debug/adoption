// ==========================
// DATA STORAGE
// ==========================
let animals = [];
let owners = [];
let missingDogs = [];
let foundDogs = [];

// ==========================
// PAGE NAVIGATION (FIXED)
// ==========================
function showMain(page){
    document.getElementById("home-page").style.display = "none";
    document.getElementById("adoption-page").style.display = "none";
    document.getElementById("lost-page").style.display = "none";

    document.getElementById(page + "-page").style.display = "block";
}

function goHome(){
    document.getElementById("home-page").style.display = "block";
    document.getElementById("adoption-page").style.display = "none";
    document.getElementById("lost-page").style.display = "none";
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

// ==========================
// ADOPTION LOGIC
// ==========================
function submitAdoptionAnimalProfile(event){
    event.preventDefault();

    const name = document.getElementById("animal-name").value;
    const type = document.getElementById("animal-type").value;

    const checked = document.querySelectorAll("#animal-characteristics input:checked");
    const traits = Array.from(checked).map(c => c.value);

    animals.push({ name, type, traits });

    alert("Animal profile created!");
    event.target.reset();
}

function submitOwnerProfile(event){
    event.preventDefault();

    const name = document.getElementById("owner-name").value;
    const select = document.getElementById("dream-characteristics");
    const traits = Array.from(select.selectedOptions).map(o => o.value);

    owners.push({ name, traits });

    alert("Owner profile created!");
    event.target.reset();
}

function matchProfiles(){
    const resultsDiv = document.getElementById("adoption-results");
    resultsDiv.innerHTML = "";

    owners.forEach(owner => {
        animals.forEach(animal => {
            let matches = animal.traits.filter(t => owner.traits.includes(t));

            if(matches.length > 0){
                resultsDiv.innerHTML += `
                    <div class="match-profile">
                        <strong>${owner.name}</strong> ↔ <strong>${animal.name}</strong><br>
                        Shared: ${matches.join(", ")}
                    </div>
                    <div class="flow-connector"></div>
                `;
            }
        });
    });
}

// ==========================
// LOST & FOUND LOGIC
// ==========================
function submitMissingDogProfile(event){
    event.preventDefault();

    const name = document.getElementById("missing-dog-name").value;
    const color = document.getElementById("missing-dog-color").value;

    missingDogs.push({ name, color });

    alert("Missing dog reported!");
    event.target.reset();
}

function submitFoundDogProfile(event){
    event.preventDefault();

    const color = document.getElementById("found-dog-color").value;

    foundDogs.push({ color });

    alert("Found dog reported!");
    event.target.reset();
}

function matchDogProfiles(){
    const resultsDiv = document.getElementById("lost-results");
    resultsDiv.innerHTML = "";

    missingDogs.forEach(missing => {
        foundDogs.forEach(found => {
            if(missing.color === found.color){
                resultsDiv.innerHTML += `
                    <div class="match-profile">
                        Possible match for <strong>${missing.name}</strong><br>
                        Color: ${missing.color}
                    </div>
                    <div class="flow-connector"></div>
                `;
            }
        });
    });
}
