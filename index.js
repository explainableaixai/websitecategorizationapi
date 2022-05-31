var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.websitecategorizationapi.com/api/gpt/gpt_category1.php',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'query': 'cars'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
