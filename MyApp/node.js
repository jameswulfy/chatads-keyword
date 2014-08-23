var http = require('http');

var Twitter = require('twit');

var T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
});

// var twitterSearchClient = new Twitter.SearchClient(
//     'CONSUMER_KEY',
//     'CONSUMER_SECRET',
//     'TOKEN',
//     'TOKEN_SECRET'
// );

T.get('search/tweets', {'q': ''}, function(error, data, response) {
    if (error)
    {
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
    }

    if (response)
    {
        console.log(result);
    }
});