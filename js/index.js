fetch('https://api.sampleapis.com/avatar/info')
  .then(response => response.json())
  .then(data => {
    const repositories = JSON.parse(data);
    console.log(repositories);
  })
  .catch(error => console.error('Error fetching repositories:', error));

