$(function(){
    var configProfile = {
      "profile": {"screenName": 'TheCodingIrish'},
      "domId": 'twitterFeed',
      "maxTweets": 1,
      "enableLinks": true,
      "showUser": true,
      "showTime": true,
      "showImages": true,
      "lang": 'en'
    };
    twitterFetcher.fetch(configProfile);
});
