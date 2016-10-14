var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});



// Making API call to Search API

// Synchronously get the url for the latest release on github and store



// Branching

router.get('/copy-check-your-answers-page',function (req, res){

// get the answer from the query string (?fullnamename=john) and set it as a variable so you can use it  

var contact_name_display = req.query.contactname
var contact_email_display = req.query.contactemail
var enquirytext_display = req.query.enquirytext
var country_display = req.query.Country
var results_passport = [
{description: "You can apply for, update, renew or replace a passport online",link: "/apply-renew-passport",title: "Apply for, renew or replace a UK passport"},
{description: "Apply online to renew your 10-year driving licence, full or provisional - cost, payment methods, documents and information you need",link: "/renew-driving-licence",title: "Renew your driving licence"},
{description: "Renew or replace a passport urgently with the 1 day Premium service or the 1 week Fast Track service",link: "/get-a-passport-urgently",title: "Get a passport urgently"}
] 
var results_health = [
{description: "Latest travel advice for Italy including safety and security, entry requirements, travel warnings and health",link: "/foreign-travel-advice/italy",title: "Italy travel advice"}, 
{description: "EU emergency measures against Xylella fastidiosa and current issues related to protecting plant health and trade of plants, fruit, vegetables or plant material.",link: "/guidance/protecting-plant-health-topical-issues",title: "Protecting plant health: topical issues"},
{description: "Latest travel advice for San Marino including safety and security, entry requirements, travel warnings and health",link: "/foreign-travel-advice/san-marino",title: "San Marino travel advice"}
]
var results_lifestyle = [{firstname:"life", lastname:"style"}]
var health = ["health", "medicine", "medicines", "doctor"]
var passport = ["passport", "lost", "renew", "Passport"]
var lifestyle = ["lifestyle", "cost", "sunshine"]
var apiCall = require("./apiCall.js")

  if (country_display == "Italy")
  if (health.indexOf(enquirytext_display) > -1) {
  // if (enquirytext_display.includes (health) == true) {

    res.render('copy-check-your-answers-page', {'results_display': results_health, 'country_display' : country_display,'contact_name_display' : contact_name_display, 'contact_email_display' : contact_email_display, 'enquirytext_display' : enquirytext_display })
    // redirect to the relevant page
    // res.redirect('/italy-results');

} else if (country_display == "Italy")
  if (passport.indexOf(enquirytext_display) > -1) {
  // if (enquirytext_display.includes (health) == true) {

    res.render('copy-check-your-answers-page', {'results_display': results_passport, 'country_display' : country_display,'contact_name_display' : contact_name_display, 'contact_email_display' : contact_email_display, 'enquirytext_display' : enquirytext_display })
    // redirect to the relevant page
    // res.redirect('/italy-results');

} else if (country_display == "Italy")
  if (lifestyle.indexOf(enquirytext_display) > -1) {
  // if (enquirytext_display.includes (health) == true) {

    res.render('copy-check-your-answers-page', {'results_display': results_lifestyle, 'country_display' : country_display,'contact_name_display' : contact_name_display, 'contact_email_display' : contact_email_display, 'enquirytext_display' : enquirytext_display })
    // redirect to the relevant page
    // res.redirect('/italy-results');


} else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('copy-check-your-answers-page', {'results_display' : apiCall.results_Display, 'country_display' : country_display}) 

  }

});


router.get('/confirmation-page',function (req, res){

// get the answer from the query string (?fullnamename=john) and set it as a variable so you can use it  

var contact_email_display = req.query.contactemail
var enquirytext_display = req.query.enquirytext
var country_display = req.query.country_display

res.render('confirmation-page', {'contact_email_display' : contact_email_display, 'enquirytext_display' : enquirytext_display, "country_display" : country_display }) 

});

// Passing data into a page, dynamic version
// this is going from fullname (input name in form_post_data) -> fullname_form (captured as variable here) -> fullname_display (the variable in form_show_data html source)
// router.get('/copy-check-your-answers-page',function (req, res){

// get the answer from the query string (?fullnamename=john) and set it as a variable so you can use it  

// var contact_name_display = req.query.contactname
// var contact_email_display = req.query.contactemail
// var enquirytext_display = req.query.enquirytext
// var country_display = req.query.Country

// now send that variable to the page which has variable tags for fullname_display etc

// res.render('copy-check-your-answers-page', {'country_display' : country_display,'contact_name_display' : contact_name_display, 'contact_email_display' : contact_email_display, 'enquirytext_display' : enquirytext_display }) 

// })


module.exports = router;
