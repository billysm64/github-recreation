

(function() {

  'use strict';

  const GITHUB_TOKEN = "2e836bc26c41da74201f232506621ac16961303e";
  const BASE_URL = 'https://api.github.com/'; //http://api.nasa.gov//

  fetch(`${BASE_URL}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));
