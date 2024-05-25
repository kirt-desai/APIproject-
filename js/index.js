fetch('https://api.sampleapis.com/avatar/info')
  .then(response => response.json())
  .then(data => {
    const repositories = JSON.parse(data);
    console.log(repositories);
  })
  .catch(error => console.error('Error fetching repositories:', error));

var data = JSON.parse(response);

var body = document.getElementsByTagName("body")[0];
body.innerHTML = data.fact;
