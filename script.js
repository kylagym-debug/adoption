let adoptionAnimalProfiles = [];
let ownerProfiles = [];

// Function to handle adoption animal profile submission
function submitAdoptionAnimalProfile(event) {
    event.preventDefault();
    const name = document.getElementById("animal-name").value;
    const type = document.getElementById("animal-type").value;
    const characteristics = Array.from(document.getElementById("animal-characteristics").selectedOptions).map(option => option.value);

    if (characteristics.length > 5) {
        alert("Please select up to 5 characteristics.");
        return;
    }

    const adoptionAnimalProfile = {
        name: name,
        type: type,
        characteristics: characteristics
    };

    adoptionAnimalProfiles.push(adoptionAnimalProfile);
    alert(`Adoption profile for ${name} created successfully!`);

    document.getElementById("adoption-animal-form").reset();
}

// Function to handle owner profile submission
function submitOwnerProfile(event) {
    event.preventDefault();
    const ownerName = document.getElementById("owner-name").value;
    const dreamCharacteristics = Array.from(document.getElementById("dream-characteristics").selectedOptions).map(option => option.value);

    if (dreamCharacteristics.length > 5) {
        alert("Please select up to 5 desired characteristics.");
        return;
    }

    const ownerProfile = {
        name: ownerName,
        dreamCharacteristics: dreamCharacteristics
    };

    ownerProfiles.push(ownerProfile);
    alert(`Owner profile for ${ownerName} created successfully!`);

    document.getElementById("owner-profile-form").reset();
}

// Function to match adoption animal profiles with owner profiles and display in flow-chart style
function matchProfiles() {
    const matchResultsPage = document.getElementById("match-results-page");
    matchResultsPage.classList.add("active"); // Show the match results page

    const matchResults = document.getElementById("match-results");
    matchResults.innerHTML = ""; // Clear previous results

    ownerProfiles.forEach(owner => {
        const ownerDiv = document.createElement("div");
        ownerDiv.classList.add("match-profile");
        ownerDiv.innerHTML = `<h3>${owner.name}</h3><p>Looking for: ${owner.dreamCharacteristics.join(", ")}</p>`;

        const connector = document.createElement("div");
        connector.classList.add("flow-connector");

        matchResults.appendChild(ownerDiv);
        matchResults.appendChild(connector);

        const matches = adoptionAnimalProfiles
            .map(animal => {
                const commonCharacteristics = animal.characteristics.filter(characteristic =>
                    owner.dreamCharacteristics.includes(characteristic)
                );
                return { animal, score: commonCharacteristics.length };
            })
            .filter(match => match.score > 0)
            .sort((a, b) => b.score - a.score);

        matches.forEach(match => {
            const { animal, score } = match;
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("match-profile");
            matchDiv.innerHTML = `<h3>${animal.name}</h3><p>${animal.type} - ${score} matching characteristics</p><p>Characteristics: ${animal.characteristics.join(", ")}</p>`;

            matchResults.appendChild(matchDiv);
        });
    });
}
