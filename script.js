// ==========================
// DATA STORAGE
// ==========================
let animals = [];
let owners = [];
let missingDogs = [];
let foundDogs = [];

// ==========================
// NAVIGATION
// ==========================
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
                        <strong>${owner.name}</strong> matches with <strong>${animal.name}</strong><br>
                        Shared traits: ${matches.join(", ")}
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
                        Color match: ${missing.color}
                    </div>
                    <div class="flow-connector"></div>
                `;
            }
        });
    });
}
