(function() {

  'use strict';

  const BASE_URL = 'https://api.github.com/users/billysm64'; //http://api.nasa.gov//

  const generateReposHTML = (data) => {
    const source = document.getElementById("repos-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = data;
    const html = template({repos: context});
    document.querySelector(".repos").innerHTML = html;
  }

  // fetch repos
  fetch(`${BASE_URL}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => generateReposHTML(data));


  const generateOrgsHTML = (data) => {
    const source = document.getElementById("orgs-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = data;
    const html = template({orgs: context});
    document.querySelector('.orgs').innerHTML = html;
  }

  // fetch orgs
  fetch(`${BASE_URL}/orgs`)
    .then(response => response.json())
    .then(data => generateOrgsHTML(data));


  const generateProfileHTML = (data) => {
    const source = document.getElementById("profile-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = data;
    const html = template(context);
    document.querySelector('.profile').innerHTML = html;
  }

  // fetch profile data
  fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(data => generateProfileHTML(data))



})();





  //
  // console.log(repos)

  // fetch(`${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${API_KEY}`) //DO NOT PUT SEMICOLON HERE, ONLY AFTER THE LAST THEN
  //   .then(response => response.json())
  //   .then(data => generateHTML(data));

  // console.log(`IT IS ${.created_at}`)


  // avatar_url: "https://avatars.githubusercontent.com/u/75700546?v=4"
  // bio: null
  // blog: ""
  // company: null
  // created_at: "2020-12-08T21:13:03Z"
  // email: null
  // events_url: "https://api.github.com/users/billysm64/events{/privacy}"
  // followers: 0
  // followers_url: "https://api.github.com/users/billysm64/followers"
  // following: 0
  // following_url: "https://api.github.com/users/billysm64/following{/other_user}"
  // gists_url: "https://api.github.com/users/billysm64/gists{/gist_id}"
  // gravatar_id: ""
  // hireable: null
  // html_url: "https://github.com/billysm64"
  // id: 75700546
  // location: null
  // login: "billysm64"
  // name: null
  // node_id: "MDQ6VXNlcjc1NzAwNTQ2"
  // organizations_url: "https://api.github.com/users/billysm64/orgs"
  // public_gists: 0
  // public_repos: 27
  // received_events_url: "https://api.github.com/users/billysm64/received_events"
  // repos_url: "https://api.github.com/users/billysm64/repos"
  // site_admin: false
  // starred_url: "https://api.github.com/users/billysm64/starred{/owner}{/repo}"
  // subscriptions_url: "https://api.github.com/users/billysm64/subscriptions"
  // twitter_username: null
  // type: "User"
  // updated_at: "2021-02-18T12:06:22Z"
  // url: "https://api.github.com/users/billysm64"
