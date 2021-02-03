const BASE_URL = 'https://api.github.com/users/billysm64'; //http://api.nasa.gov//

console.log(GITHUB_TOKEN)
fetch(`${BASE_URL}`, {
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data));

const repos = (data) => {
  const source = document.getElementById("repositories").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".repositories").innerHTML = html;
}

console.log(data.created_at)
