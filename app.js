const axios = require('axios');

var args = process.argv.slice(2);

const getRepoIssues = (org,repo, callback) => {
    const topics = [];
    axios.get( 'https://api.github.com/repos/' + org + '/' + repo + '/issues?state=all')
    .then(function (response) {
      // handle success
      callback(response.data)
    })
    .catch(function (error) {
      // handle error
      callback(error);
    });
}

getRepoIssues(args[0],args[1], (response) => {
    console.log(response)
})