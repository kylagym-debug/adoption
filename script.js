let adoptionAnimalProfiles = [];
let ownerProfiles = [];

// Animal profile
function submitAdoptionAnimalProfile(event) {
    event.preventDefault();

    const name = document.getElementById("animal-name").value;
    const type = document.getElementById("animal-type").value;
    const characteristics = Array.from(
        document.getElementById("animal-characteristics").selectedOptions
    ).map(option => option.value);

    if (characteristics.length > 5) {
        alert("Please select up to 5 characteristics.");
        return;
    }

    adoptionAnimalProfiles.push({ name, type, characteristics });

    alert(`Adoption profile for ${name} created!`);
    document.getElementById("adoption-animal-form").reset();
}

// Owner profile
function submitOwnerProfile(event) {
    event.preventDefault();

    const ownerName = document.getElementById("owner-name").value;
    const dreamCharacteristics = Array.from(
        document.getElementById("dream-characteristics").selectedOptions
    ).map(option => option.value);

    if (dreamCharacteristics.length > 5) {
        alert("Select up to 5 desired characteristics.");
        return;
    }

    ownerProfiles.push({
        name: ownerName,
        dreamCharacteristics
    });

    alert(`Owner profile for ${ownerName} created!`);
    document.getElementById("owner-profile-form").reset();
}

// Matching
function matchProfiles() {

    if (ownerProfiles.length === 0 || adoptionAnimalProfiles.length === 0) {
        alert("Create both profiles first!");
        return;
    }

    const page = document.getElementById("match-results-page");
    const results = document.getElementById("match-results");

    page.classList.add("active");
    results.innerHTML = "";

    ownerProfiles.forEach(owner => {

        const ownerDiv = document.createElement("div");
        ownerDiv.classList.add("match-profile");

        ownerDiv.innerHTML = `
            <h3>👤 ${owner.name}</h3>
            <p><strong>Looking for:</strong> ${owner.dreamCharacteristics.join(", ")}</p>
        `;

        results.appendChild(ownerDiv);

        const connector = document.createElement("div");
        connector.classList.add("flow-connector");
        results.appendChild(connector);

        const matches = adoptionAnimalProfiles
            .map(animal => {
                const common = animal.characteristics.filter(c =>
                    owner.dreamCharacteristics.includes(c)
                );
                return { animal, score: common.length };
            })
            .filter(m => m.score > 0)
            .sort((a, b) => b.score - a.score);

        matches.forEach(match => {

            const div = document.createElement("div");
            div.classList.add("match-profile");

            div.innerHTML = `
                <h3>🐾 ${match.animal.name}</h3>
                <p><strong>Type:</strong> ${match.animal.type}</p>
                <p><strong>Match Score:</strong> ${match.score} ⭐</p>
                <p><strong>Traits:</strong> ${match.animal.characteristics.join(", ")}</p>
            `;

            results.appendChild(div);
        });
    });
}
