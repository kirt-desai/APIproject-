document.getElementById("loadFilms").addEventListener("click", () => fetchFilms("titles"));
document.getElementById("loadPeople").addEventListener("click", () => fetchPeople("names"));

function fetchFilms(type) {
    const endpoint = "https://www.swapi.tech/api/films";
    
    fetch(endpoint)
        .then(response => response.json())
        .then(data => displayFilms(data.result, type))
        .catch(error => {
            document.getElementById("dataDisplay").innerHTML = "<p>Error loading films.</p>";
            console.error("Error fetching films:", error);
        });
}

function fetchPeople(type) {
    const endpoint = "https://www.swapi.tech/api/people";
    
    fetch(endpoint)
        .then(response => response.json())
        .then(data => displayPeople(data.results, type))
        .catch(error => {
            document.getElementById("dataDisplay").innerHTML = "<p>Error loading people.</p>";
            console.error("Error fetching people:", error);
        });
}

function displayFilms(films, type) {
    const displayArea = document.getElementById("dataDisplay");
    displayArea.innerHTML = ""; // Clear previous content

    films.forEach(film => {
        const filmCard = document.createElement("div");
        filmCard.className = "card";

        if (type === "titles") {
            filmCard.innerHTML = `<h3>${film.properties.title}</h3>`;
        } else if (type === "release_dates") {
            filmCard.innerHTML = `<p>Release Date: ${film.properties.release_date}</p>`;
        }

        displayArea.appendChild(filmCard);
    });
}

function displayPeople(people, type) {
    const displayArea = document.getElementById("dataDisplay");
    displayArea.innerHTML = ""; // Clear previous content

    people.forEach(person => {
        const personCard = document.createElement("div");
        personCard.className = "card";

        if (type === "names") {
            personCard.innerHTML = `<h3>${person.name}</h3>`;
        } 

        displayArea.appendChild(personCard);
    });
}
