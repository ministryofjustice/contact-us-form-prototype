function GET(https://www.gov.uk/api/search?q=government+digital+service){
  var request = new XMLHttpRequest();
  Httpreq.open ("GET",https://www.gov.uk/api/search?q=government+digital+service,false);
  Httpreq.send ();
  return Httpreq.responseText
}
console.log(responseText)