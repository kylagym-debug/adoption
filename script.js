// NAV SWITCH
function showSection(section) {
    document.getElementById("adoption-section").classList.add("hidden");
    document.getElementById("lost-section").classList.add("hidden");
    document.getElementById(section + "-section").classList.remove("hidden");
}

/* ---------------- ADOPTION ---------------- */
let adoptionAnimalProfiles = [];
let ownerProfiles = [];

function submitAdoptionAnimalProfile(e){
e.preventDefault();

const name = document.getElementById("animal-name").value;
const type = document.getElementById("animal-type").value;

const characteristics = Array.from(
document.querySelectorAll('#animal-characteristics input:checked')
).map(cb => cb.value);

adoptionAnimalProfiles.push({name,type,characteristics});
alert("Animal added!");
}

function submitOwnerProfile(e){
e.preventDefault();

const name = document.getElementById("owner-name").value;
const dream = Array.from(
document.getElementById("dream-characteristics").selectedOptions
).map(o=>o.value);

ownerProfiles.push({name,dreamCharacteristics:dream});
alert("Owner added!");
}

function matchProfiles(){
const results = document.getElementById("adoption-results");
results.innerHTML="";

ownerProfiles.forEach(owner=>{
let div=document.createElement("div");
div.className="match-profile";
div.innerHTML=`👤 ${owner.name}`;
results.appendChild(div);

adoptionAnimalProfiles.forEach(animal=>{
let score = animal.characteristics.filter(c=>owner.dreamCharacteristics.includes(c)).length;
if(score>0){
let a=document.createElement("div");
a.className="match-profile";
a.innerHTML=`🐾 ${animal.name} (${score}⭐)`;
results.appendChild(a);
}
});
});
}

/* ---------------- LOST DOG ---------------- */
let missingDogProfiles=[];
let foundDogProfiles=[];

function submitMissingDogProfile(e){
e.preventDefault();
missingDogProfiles.push({
name:document.getElementById("missing-dog-name").value,
color:document.getElementById("missing-dog-color").value,
size:document.getElementById("missing-dog-size").value,
breed:document.getElementById("missing-dog-breed").value
});
alert("Missing dog added");
}

function submitFoundDogProfile(e){
e.preventDefault();
foundDogProfiles.push({
color:document.getElementById("found-dog-color").value,
size:document.getElementById("found-dog-size").value,
breed:document.getElementById("found-dog-breed").value
});
alert("Found dog added");
}

function matchDogProfiles(){
const results=document.getElementById("lost-results");
results.innerHTML="";

missingDogProfiles.forEach(m=>{
foundDogProfiles.forEach(f=>{
let score=0;
if(m.color===f.color) score++;
if(m.size===f.size) score++;
if(m.breed && f.breed && m.breed===f.breed) score++;

if(score>0){
let div=document.createElement("div");
div.className="match-profile";
div.innerHTML=`🔍 ${m.name} → Match Score: ${score}`;
results.appendChild(div);
}
});
});
}
