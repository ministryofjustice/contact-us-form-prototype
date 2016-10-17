// Make api call

var apiResults = module.apiResults = {};

apiResults.results = function () {

var options = {
      headers: {'user-agent': 'node.js'}
    }
var searchAPIUrl = 'https://www.gov.uk/api/search.json?q=government+digital+service&count=1'
var res = request('GET', searchAPIUrl, options)
console.log ('Call made to API')
      var data = JSON.parse(res.getBody('utf8'))
      var urlStart = 'https://www.gov.uk'
      var contentDescription = data.results.description
      var contentTitle = data.results.title
      var contentLink = urlStart + data.results.link

var results = "Hello World"

}