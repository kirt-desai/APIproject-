document.addEventListener('DOMContentLoaded', () => {
    fetchAvatarInfo();
});


    fetch('https://api.sampleapis.com/avatar/info')
        .then(response => response.json())
        .then(data => {
            displayAvatarInfo(data);
        })
        .catch(error => console.error('Error fetching avatar info:', error));


    fetch('https://api.sampleapis.com/avatar/characters')
        .then(response => response.json())
        .then(data => {
            displayAvatarCharacters(data);
        })
        .catch(error => console.error('Error fetching avatar characters:', error));



    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="avatar-info">
            <h2>Avatar Info</h2>
            <p>Name: ${data.name}</p>
            <p>Description: ${data.description}</p>
            <p>Age: ${data.age}</p>
            <img src="${data.image}" alt="Avatar Image">
        </div>
    `;



    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="avatar-characters">
            <h2>Avatar Characters</h2>
            ${data.map(character => `
                <div class="character-item">
                    <h3>${character.name}</h3>
                    <p>Nation: ${character.nation}</p>
                    <img src="${character.image}" alt="${character.name} Image">
                </div>
            `).join('')}
        </div>
    `;

