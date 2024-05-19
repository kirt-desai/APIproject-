fetch('https://api.sampleapis.com/avatar/info')
  .then(response => response.json())
  .then(data => {
    const repositories = JSON.parse(data);
    console.log(repositories);
  })
  .catch(error => console.error('Error fetching repositories:', error));

let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');

for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}


