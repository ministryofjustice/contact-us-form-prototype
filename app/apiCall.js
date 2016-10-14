// Make actual API call

exports.getSearchResults = function () {
  var results_Display = ''

//  if (releaseUrl !== null) {
    // Release url already exists
  //  console.log('Release url cached:', releaseUrl)
  //  return releaseUrl
  // } else {
    // Release url doesn't exist
    var options = {
      headers: {'user-agent': 'node.js'}
    }
    var searchAPIUrl = 'https://www.gov.uk/api/search.json?q=government+digital+service&count=1'
    try {
      console.log('Getting search results from GOV.UK Search API')

      var res = request('GET', searchAPIUrl, options)
      var data = JSON.parse(res.getBody('utf8'))
      // var zipballUrl = data['zipball_url']
      // var releaseVersion = zipballUrl.split('/').pop()
      var urlStart = 'https://www.gov.uk'
      // var urlEnd = '.zip'
      // var zipUrl = urlStart + releaseVersion + urlEnd
      var contentDescription = data.results.description
      var contentTitle = data.results.title
      var contentLink = urlStart + data.results.link

      console.log('Result is', contentTitle)
      // releaseUrl = zipUrl
      results_Display = {'results_Title': contentTitle, 'results_Description' : contentDescription, 'results_Link' : contentLink}
    } catch (err) {
      results_Display = 'Call Failed'
      console.log("Couldn't retrieve search results")
    }
  }
  return results_Display
}
